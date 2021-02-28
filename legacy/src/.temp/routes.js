export default [
  {
    path: "/orientation/wtf/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/ross/dev/rossta/webpackersurvival.guide/src/templates/MarkdownPage.vue")
  },
  {
    path: "/orientation/pain/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/ross/dev/rossta/webpackersurvival.guide/src/templates/MarkdownPage.vue")
  },
  {
    path: "/tour/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/ross/dev/rossta/webpackersurvival.guide/src/templates/MarkdownPage.vue")
  },
  {
    path: "/recipes/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/ross/dev/rossta/webpackersurvival.guide/src/templates/MarkdownPage.vue")
  },
  {
    path: "/orientation/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/ross/dev/rossta/webpackersurvival.guide/src/templates/MarkdownPage.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/ross/dev/rossta/webpackersurvival.guide/src/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/ross/dev/rossta/webpackersurvival.guide/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/ross/dev/rossta/webpackersurvival.guide/src/pages/404.vue")
  }
]

