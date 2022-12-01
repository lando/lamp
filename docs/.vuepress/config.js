import {defineUserConfig} from '@vuepress/cli';
import {defaultThemePlus} from '@lando/vuepress-theme-default-plus';

export default defineUserConfig({
  lang: 'en-US',
  title: 'Lando',
  description: 'Lando LAMP Plugin Documentation',
  base: '/lamp/',
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1'}],
    ['link', {rel: 'icon', href: '/lamp/favicon.ico', size: 'any'}],
    ['link', {rel: 'icon', href: '/lamp/favicon.svg', type: 'image/svg+xml'}],
    ['link', {rel: 'preconnect', href: '//fonts.googleapis.com'}],
    ['link', {rel: 'preconnect', href: '//fonts.gstatic.com', crossorigin: true}],
    ['link', {rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Lexend:wght@500&display=swap'}],
  ],
  theme: defaultThemePlus({
    landoDocs: true,
    logo: '/images/icon.svg',
    docsDir: 'docs',
    docsBranch: 'main',
    repo: 'lando/lamp',
    sidebarHeader: {
      enabled: true,
      title: 'LAMP Plugin',
      icon: '/images/lampicon.png',
    },
    sidebar: [
      {
        text: 'Overview',
        link: '/index.html',
      },
      '/getting-started.html',
      '/config.html',
      '/tooling.html',
      '/support.html',
      {text: 'Examples', link: 'https://github.com/lando/lamp/tree/main/examples'},
      {text: 'Release Notes', link: 'https://github.com/lando/lamp/releases'},
      '/development.html',
    ],
  }),
});
