// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const siteUrl = process.env.SITE_URL ? process.env.SITE_URL : ''
const web = process.env.URL_WEB || false
const twitter = process.env.URL_TWITTER || false
const github = process.env.URL_GITHUB || false
const gaID = process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9'

module.exports = {
  siteName: 'WSG',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png',
  },
  siteUrl,
  settings: {
    web,
    twitter,
    github,
    nav: {
      links: [
        { path: '/orientation/', title: 'Orientation' },
        { path: '/tour/', title: 'Tour' },
        { path: '/recipes/', title: 'Recipes' },
      ],
    },
    sidebar: [
      {
        name: 'orientation',
        title: 'Orientation',
        sections: [
          {
            title: 'Orientation',
            items: ['/orientation/', '/orientation/wtf/'],
          },
        ],
      },
      {
        name: 'tour',
        title: 'Tour',
        sections: [
          {
            title: 'Tour',
            items: ['/tour/'],
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
          // prevent purging of prism classes.
          whitelistPatternsChildren: [/token$/],
        },
      },
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: gaID,
      },
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {},
    },
  ],
}

// const examplesidebar = {
//   name: 'docs',
//   title: 'docs',
//   sections: [
//     {
//       title: 'getting started',
//       items: [
//         '/docs/',
//         '/docs/installation/',
//         '/docs/writing-content/',
//         '/docs/deploying/',
//       ],
//     },
//     {
//       title: 'configuration',
//       items: ['/docs/settings/', '/docs/sidebar/'],
//     },
//   ],
// }

// const legacysidebar = [
//   {
//     name: 'guides',
//     title: 'guides',
//     sections: [
//       {
//         title: 'start here',
//         items: [
//           '/guides/',
//           '/guides/overview/',
//           '/guides/background/',
//           '/guides/sprockets/',
//           '/guides/outline/',
//         ],
//       },
//       {
//         title: 'guides',
//         items: [
//           '/guides/install/',
//           '/guides/organize/',
//           '/guides/write/',
//           '/guides/import/',
//           '/guides/integrate/',
//           '/guides/compile/',
//           '/guides/render/',
//           '/guides/image/',
//           '/guides/style/',
//           '/guides/configure/',
//           '/guides/optimize/',
//         ],
//       },
//     ],
//   },
//   {
//     name: 'recipes',
//     title: 'recipes',
//     sections: [
//       {
//         title: 'recipes',
//         items: ['/recipes/'],
//       },
//     ],
//   },
// ]
