import { defineConfig } from 'vitepress'
import { getContent } from './utils'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  appearance: false, // Hides the dark mode toggle
  title: "Mechanica",
  description: "Course Notes for Mechanical Engineering (BS)",
  base: "/mechanica/",
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
          { text: 'Resources', link: '/introduction/resources' }
        ]
      },
      { 
        text: 'Courses',
        items: [
          { text: 'Statics of Rigid Bodies', link: '/courses/mes2103' },
          { text: 'Statics of Deformable Bodies', link: '/courses/mes2204' },
          { text: 'Fluid Mechanics', link: '/courses/me2208' },
          { text: 'Thermodynamics I', link: '/courses/me2104' },
          { text: 'Thermodynamics II', link: '/courses/me2207' }
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/usc-swug/mechanica/edit/main/docs/:path',
      text: 'Edit this page on GitHub.'
    }

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
