import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '冒险之源文档库',
  head: [
    ['link', { rel: 'canonical', href: 'https://help.mxzysoa.top' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'description', content: '冒险之源的官方文档库' }],
    ['meta', { name: 'keywords', content: '我的世界, Minecraft, 冒险之源, 文档, 游戏' }],
  ],
  theme: defaultTheme({
    navbar: [
      {
        text: 'MXZY Skin',
        link: 'https://skin.mxzysoa.top/',
      },
      {
        text: '鸣谢名单',
        link: 'https://help.mxzysoa.top/acknowledgments',
      }
    ],
    sidebar: [
      {
        text: '欢迎页',
        link: '/'
      },
      {
        text: '萌新教程',
        link: '/newbie-tutorial'
      },
      {
        text: '玩家守则',
        link: '/agreement'
      },
      {
        text: '赞助表',
        link: '/sponsor'
      },
      {
        text: '功能性方块摆放规范',
        link: '/blocks-placing-standard'
      },
      {
        text: '鸣谢',
        link: '/acknowledgments'
      }
    ],
    docsRepo: 'MXZYSOA/MXZY-docs',
    docsBranch: 'main',
    lastUpdatedText: '最后更新 ',
    editLinkText: '帮助我们完善这个页面',
  }),
  bundler: viteBundler(),
  markdown: {
    links: {
      externalAttrs: {
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    }
  }
})
