import { defineConfig } from 'vitepress'
import { getContent } from './utils'
import fs from 'fs'
import yaml from 'js-yaml'

const editLinks = yaml.load(fs.readFileSync('documentId.yaml', 'utf8')) as Record<string, string>


// https://vitepress.dev/reference/site-config
export default defineConfig({
  appearance: false, // Hides the dark mode toggle
  title: "Mechanica",
  description: "Course Notes for Mechanical Engineering (BS)",
  base: "/mechanica/",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Courses', link: '/introduction/about' }
    ],

    footer: {
      copyright: 'Copyright © 2025, University of San Carlos SOLIDWORKS® User Group'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/usc-swug/mechanica' },
      { icon: 'dassaultsystemes', link: 'https://community.swugn.org/university-of-san-carlos-solidworks-user-group/' }
    ],


    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Mechanica?', link: '/introduction/about' },
          { text: 'Contributions', link: '/introduction/contributions' },
          { text: 'General Resources', link: '/introduction/resources' }
        ]
      },
      { 
        text: 'Courses',
        items: [
          { text: 'Calculus I', link: '/courses/em1101' },
          { text: 'Calculus II', link: '/courses/em1202' },
          { text: 'Statics of Rigid Bodies', link: '/courses/mes2103' },
          { text: 'Statics of Deformable Bodies', link: '/courses/mes2204' },
          { text: 'Fluid Mechanics', link: '/courses/me2208' },
          { text: 'Thermodynamics I', link: '/courses/me2104' },
          { text: 'Thermodynamics II', link: '/courses/me2207' }
        ]
      }
    ],

    editLink: {
      text: 'Edit this page.',
      pattern: (new Function('payload', `
        const { filePath } = payload;
        const links = ${JSON.stringify(editLinks)};
        const match = filePath.match(/^courses\\/([a-z0-9]+)\\.md$/i);
        if (match) {
          const courseCode = match[1];
          const docId = links[courseCode];
          if (docId) {
            return 'https://docs.google.com/document/d/' + docId + '/edit';
          }
        }
        return 'https://github.com/usc-swug/mechanica/edit/main/docs/' + filePath;
      `)) as any
    },
  },
  vite: {
    plugins: [
      {
        name: 'vitepress-modify-md',
        enforce: 'pre',
        transform(code, id) {
            if (id.includes("courses") == true) {
              return code + "\n" + getContent(id)
            } else {
              return code
            }
        }
      }
    ]
  },
  ignoreDeadLinks: true,
  markdown: {
    math: true
  },

})
