// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Docc',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png',
  },
  siteUrl: process.env.SITE_URL ? process.env.SITE_URL : 'https://example.com',
  settings: {
    web: process.env.URL_WEB || false,
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [
        { path: '/guides/', title: 'Guides' },
        { path: '/recipes/', title: 'Recipes' },
        { path: '/tutorials/', title: 'Tutorials' },
      ],
    },
    sidebar: [
      // {
      //   name: 'docs',
      //   title: 'Docs',
      //   sections: [
      //     {
      //       title: 'Getting Started',
      //       items: [
      //         '/docs/',
      //         '/docs/installation/',
      //         '/docs/writing-content/',
      //         '/docs/deploying/',
      //       ],
      //     },
      //     {
      //       title: 'Configuration',
      //       items: ['/docs/settings/', '/docs/sidebar/'],
      //     },
      //   ],
      // },
      {
        name: 'guides',
        title: 'Guides',
        sections: [
          {
            title: 'Start here',
            items: [
              '/guides/',
              '/guides/background/',
              '/guides/sprockets/',
              '/guides/outline/',
            ],
          },
          {
            title: 'Guides',
            items: [
              '/guides/install/',
              '/guides/organize/',
              '/guides/write/',
              '/guides/import/',
              '/guides/integrate/',
              '/guides/compile/',
              '/guides/render/',
              '/guides/image/',
              '/guides/style/',
              '/guides/configure/',
              '/guides/optimize/',
            ],
          },
        ],
      },
      {
        name: 'recipes',
        title: 'Recipes',
        sections: [
          {
            title: 'Recipes',
            items: ['/recipes/'],
          },
        ],
      },
      {
        name: 'tutorials',
        title: 'Tutorials',
        sections: [
          {
            title: 'Tutorials',
            items: ['/tutorials/'],
          },
        ],
      },
    ],
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
          plugins: ['@gridsome/remark-prismjs'],
        },
      },
    },

    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [/token$/],
        },
      },
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9',
      },
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {},
    },
  ],
}
