module.exports = {
  title: "Webpacker Survival Guide",
  tagline: "The tagline of my site",
  url: "https://webpackersurvival.guide",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "rossta", // Usually your GitHub org/user name.
  projectName: "webpackersurvival.guide", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Webpacker Survival Guide",
      logo: {
        alt: "Webpacker Survival Guide Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "orientation",
          label: "Orientation",
          position: "left",
        },
        {
          to: "recipes",
          label: "Recipes",
          position: "left",
        },
        {
          to: "blog",
          label: "Blog",
          position: "left",
        },
        {
          href: "https://github.com/rossta/webpackersurvival.guide",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Help",
          items: [
            // {
            //   label: "Style Guide",
            //   to: "docs/",
            // },
            // {
            //   label: "Second Doc",
            //   to: "docs/doc2/",
            // },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Webpacker Survival Guide.`,
    },
    colorMode: {
      // "light" | "dark"
      // defaultMode: "light",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: true,

      // Dark/light switch icon options
      switchConfig: {
        darkIcon: "🌙",
        lightIcon: "🔆",
        darkIconStyle: {
          marginLeft: "1px",
        },
        lightIconStyle: {
          marginLeft: "1px",
        },
      },
    },
    algolia: {
      apiKey: "XXXXX",
      indexName: "webpackersurvival",
    },
  },
  themes: [
    [
      "@docusaurus/theme-classic",
      {
        customCss: require.resolve("./src/css/custom.css"),
      },
    ],
    "@docusaurus/theme-search-algolia",
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "orientation",
        path: "orientation",
        routeBasePath: "orientation",
        sidebarPath: require.resolve("./sidebars/orientation.js"),
        editUrl:
          "https://github.com/webpackersurvival.guide/edit/main/orientation",
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "recipes",
        path: "recipes",
        routeBasePath: "recipes",
        sidebarPath: require.resolve("./sidebars/recipes.js"),
        editUrl: "https://github.com/webpackersurvival.guide/edit/main/recipes",
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        showReadingTime: true,
        editUrl: "https://github.com/webpackersurvival.guide/edit/main/blog",
      },
    ],
    "@docusaurus/plugin-content-pages",
    "@docusaurus/plugin-debug",
    "@docusaurus/plugin-sitemap",
  ],
};
