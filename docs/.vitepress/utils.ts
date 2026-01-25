import * as fs from 'fs';
import * as yaml from 'js-yaml';
import path from 'path';

export function getContent(courseFilePath: string): string {
  // TODO: Finish
  
  const courseCodeMatch = courseFilePath.match(/courses\/([a-z0-9]+)/i);
  const courseCode = courseCodeMatch ? courseCodeMatch[1] : '';
  // Obtain document id using courseCode in yaml file
  const filePath = path.resolve(process.cwd(), 'documentId.yaml');
  let documentId: string | undefined;

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = yaml.load(fileContents) as Record<string, string>;
    documentId = data[courseCode];
  } catch (e) {
    console.error('Error reading YAML file:', e);
  }

  if (!documentId) {
    return `::: warning Under Construction
    Document ID not found for course code: ${courseCode}`;
  } else {
    const markdownFilePath = path.resolve(process.cwd(), 'docs/notes', `${documentId}.md`);
    try {
      const fileContents = fs.readFileSync(markdownFilePath, 'utf8');
      return fileContents;
    } catch (e) {
      console.error('Error reading Markdown file:', e);
      return `::: warning Under Construction
      Markdown file not found for course code: ${courseCode}`;
    }
  }
}