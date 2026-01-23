// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { useData } from 'vitepress'
import VPFeatures from 'vitepress-carbon/dist/theme/components/VPFeatures.vue'
import './style.css'

export default {
  ...DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'home-features-after': () => {
        const { frontmatter } = useData()
        return frontmatter.value.carbonFeatures
          ? h(VPFeatures, { features: frontmatter.value.carbonFeatures })
          : null
      }
    })
  }
}