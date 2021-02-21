<template>
  <Layout>
    <div class="pt-8 md:pt-16">
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center mb-2 text-ui-primary">
          <Logo :width="80" />
          <h2 class="text-6xl font-black tracking-tighter border-none">
            Webpacker Survival Guide
          </h2>
        </div>
        <h1 class="text-4xl text-center lg:text-5xl">
          Helping Rails and JavaScript play nice together
        </h1>
        <p class="text-xl font-medium text-center">
          More bundling. Less bungling.
        </p>

        <!-- <div class="py-4">
          <code class="block px-4 py-1 select-all bg-ui-border text-ui-typo"
            >gridsome create your-project https://github.com/mrcrmn/docc</code
          >
        </div> -->

        <div class="flex justify-center mt-8">
          <g-link
            to="/docs/"
            class="flex items-center px-6 py-4 ml-auto text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
          >
            Get started
            <ArrowRightCircleIcon class="ml-4" size="1x" />
          </g-link>
        </div>

        <p class="mt-8 text-center">Open Source. MIT License.</p>
      </div>

      <div
        class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"
      ></div>

      <div class="flex flex-wrap justify-center -mx-4">
        <div
          class="flex flex-col items-center w-full pl-8 pr-4 mb-8 text-center md:w-1/3"
        >
          <AnchorIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Orientation
          </h3>
          <p class="text-lg text-left">
            Understand Webpacker does (and doesn't) do. Crafted especially for
            developers familiar with the Rails asset pipeline.
          </p>
        </div>

        <div
          class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3"
        >
          <MonitorIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Guided Tour
          </h3>
          <p class="text-lg text-left">
            <span
              class="border-b border-dashed border-ui-primary text-ui-primary"
              >Coming soon!</span
            >
            Follow our step-by-step to get up-and-running with Webpacker taking
            you from zero-to-deploy covering topics from development to
            optimization.
          </p>
        </div>

        <div
          class="flex flex-col items-center w-full pl-4 px-8 mb-8 text-center md:w-1/3"
        >
          <BookOpenIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Recipes
          </h3>
          <p class="text-lg text-left">
            <span
              class="border-b border-dashed border-ui-primary text-ui-primary"
              >Coming soon!</span
            >
            Tackle common Webpacker tasks including how-in-the-world to add
            jQuery and setup steps for React and Vue.
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Logo from '@/components/Logo'
import {
  AnchorIcon,
  ArrowRightCircleIcon,
  MonitorIcon,
  BookOpenIcon,
} from 'vue-feather-icons'

export default {
  components: {
    Logo,
    AnchorIcon,
    ArrowRightCircleIcon,
    BookOpenIcon,
    MonitorIcon,
  },

  metaInfo() {
    const title = 'For Rails developers who dislike JavaScript'
    const description =
      'The best resource to learn and master asset bundling for Rails'

    return {
      title: title,
      meta: [
        {
          name: 'description',
          content: description,
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ],
    }
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
