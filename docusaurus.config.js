const editUrl = 'https://github.com/webpackersurvival.guide/edit/main'

module.exports = {
  title: 'Webpacker Survival Guide',
  tagline: 'The definitive guide to Webpacker for Rails developers',
  url: 'https://webpackersurvival.guide',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'rossta',
  projectName: 'webpackersurvival.guide',
  scripts: [
    {
      src: 'https://plausible.io/js/plausible.outbound-links.js',
      async: true,
      defer: true,
      'data-domain': 'webpackersurvival.guide',
    },
  ],
  themeConfig: {
    navbar: {
      title: 'Webpacker Survival Guide',
      logo: {
        alt: 'Webpacker Survival Guide Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'orientation',
          label: 'Orientation',
          position: 'left',
        },
        {
          to: 'tour',
          label: 'Tour',
          position: 'left',
        },
        {
          to: 'recipes',
          label: 'Recipes',
          position: 'left',
        },
        // TODO: Enable when we have a blog
        // {
        //   to: 'blog',
        //   label: 'Blog',
        //   position: 'left',
        // },
        {
          href: 'https://github.com/rossta/webpackersurvival.guide',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'The Guide',
          items: [
            {
              label: 'Orientation',
              to: 'orientation/',
            },
            {
              label: 'Tour',
              to: 'tour/',
            },
            {
              label: 'Recipes',
              to: 'recipes/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/webpacker',
            },
            {
              label: 'Ruby on Rails Discourse',
              href: 'https://discuss.rubyonrails.org/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // TODO: Enable when we have a blog!
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/rossta/webpackersurvival.guide',
            },
            {
              label: 'rossta.net',
              href: 'https://rossta.net/webpack-on-rails',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Webpacker Survival Guide.`,
    },
    colorMode: {
      disableSwitch: true,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: true,

      // Dark/light switch icon options
      switchConfig: {
        darkIcon: '🌙',
        lightIcon: '🔆',
        darkIconStyle: {
          marginLeft: '1px',
        },
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    algolia: {
      apiKey: 'XXXXX',
      indexName: 'webpackersurvival',
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),

      // https://prismjs.com/#supported-languages
      additionalLanguages: ['ruby', 'erb'],
    },
  },
  themes: [
    [
      '@docusaurus/theme-classic',
      {
        customCss: require.resolve('./src/css/custom.css'),
      },
    ],
    '@docusaurus/theme-search-algolia',
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'orientation',
        path: 'orientation',
        routeBasePath: 'orientation',
        sidebarPath: require.resolve('./sidebars/orientation.js'),
        showLastUpdateTime: true,
        editUrl,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tour',
        path: 'tour',
        routeBasePath: 'tour',
        sidebarPath: require.resolve('./sidebars/tour.js'),
        showLastUpdateTime: true,
        editUrl,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'recipes',
        path: 'recipes',
        routeBasePath: 'recipes',
        sidebarPath: require.resolve('./sidebars/recipes.js'),
        showLastUpdateTime: true,
        editUrl,
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        showReadingTime: true,
        editUrl,
      },
    ],
    '@docusaurus/plugin-content-pages',
    '@docusaurus/plugin-debug',
    '@docusaurus/plugin-sitemap',
  ],
}
