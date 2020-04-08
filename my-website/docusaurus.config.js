module.exports = {
  title: '专注于场景落地',
  tagline: 'everything is possible for him who believes',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/heart.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '凤娇娇',
      logo: {
        alt: 'My Site Logo',
        src: 'img/heart.png',
      },
      links: [
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: '人工智能',
          position: 'left',
        },
        {to: 'blog', label: '前端开发', position: 'left'},
        {to: 'blog', label: 'TGIF', position: 'left'},
        {to: 'blog', label: '关于我', position: 'right'},
        {
          href: 'https://github.com/Yonahwang',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Yonahwang',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
