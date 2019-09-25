module.exports = {
  title: "Bougie's Utils",
  description: "Bougie's Utils",
  base: '/bougie-utils/',
  themeConfig: {
    logo: 'https://s2.ax1x.com/2019/09/25/uVhvRS.png',
    nav: [
      {
        text: 'Blog',
        link: 'https://www.bougieblog.cn'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/bougieL/bougie-utils'
      }
    ],
    sidebar: {
      '/zh-CN/latest/': ['written-in-front', 'documentation', 'change-log']
    },
    displayAllHeaders: true,
    // repoLabel: 'github',
    lastUpdated: '上次更新',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！'
  }
}
