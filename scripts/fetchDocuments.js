const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');
const mammoth = require('mammoth');
const TurndownService = require('turndown');


// CONFIGURATION
const OUTPUT_DIR = path.resolve(process.cwd(), 'docs/notes'); // Where the MD file goes
const IMAGE_DIR = path.resolve(process.cwd(), 'docs/public/images'); // Where images go
const IMAGE_PUBLIC_PATH = '/images'; // Path used in the MD link


function fetchDocumentIds() {
  const yaml = fs.readFileSync('documentId.yaml', 'utf8');
  const docIds = {};
  const lines = yaml.split('\n');
  for (const line of lines) {
    const match = line.match(/^\s*(\S+):\s*(\S+)\s*$/);
    if (match) {
      const courseCode = match[1];
      const docId = match[2];
      docIds[courseCode] = docId;
    }
  }
  return docIds;
}


function fetchCredentials() {
  // Use environment variables, if not found, fallback to local file.
  const credentials = process.env.GCP_CREDENTIALS || fs.readFileSync('credentials.json', 'utf8');
  return JSON.parse(credentials);
}

async function downloadAndConvert(documentId) {
  // 1. AUTHENTICATION
  const auth = new google.auth.GoogleAuth({
    credentials: fetchCredentials(),
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  });

  const drive = google.drive({ version: 'v3', auth });

  console.log('⬇️ Downloading Doc...');

  // 2. DOWNLOAD AS DOCX
  // We stream the data directly into a buffer
  const res = await drive.files.export({
    fileId: documentId,
    mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  }, { responseType: 'arraybuffer' });

  const buffer = Buffer.from(res.data);

  console.log('⚙️ Processing with Mammoth...');

  // 3. CONFIGURE IMAGE HANDLING
  let imageCounter = 0;

  const options = {
    convertImage: mammoth.images.imgElement(function(image) {
      return image.read("base64").then(function(imageBuffer) {
        imageCounter++;
        const extension = image.contentType.split('/')[1];
        const paddedCounter = String(imageCounter).padStart(3, '0');
        const filename = `${documentId}-${paddedCounter}.${extension}`;
        const localPath = path.join(IMAGE_DIR, filename);

        // Write file to disk
        fs.writeFileSync(localPath, Buffer.from(imageBuffer, 'base64'));

        // Return the new 'src' for the HTML <img> tag
        return {
          src: path.join(IMAGE_PUBLIC_PATH, filename)
        };
      });
    })
  };

  // 4. CONVERT TO HTML -> MARKDOWN
  const result = await mammoth.convertToHtml({ buffer: buffer }, options);
  const html = result.value;

  const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
  });

  const markdown = turndownService.turndown(html);

  // 5. SAVE MARKDOWN
  fs.writeFileSync(path.join(OUTPUT_DIR, documentId + '.md'), markdown);

  console.log('✅ Done! Markdown and images saved.');
}


const documentIds = fetchDocumentIds();
for (const docId of Object.values(documentIds)) {
  downloadAndConvert(docId).catch(console.error);
}
