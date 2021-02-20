<template>
  <div>
    <div class="flex flex-col sm:flex-row justify-between items-center">
      <g-link
        v-if="prev"
        :to="prev.path"
        class="mb-4 sm:mb-0 flex items-center mr-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors"
      >
        <ArrowLeftIcon class="mr-2" size="1x" />
        {{ prev.title }}
      </g-link>

      <g-link
        v-if="next"
        :to="next.path"
        class="flex items-center ml-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors"
      >
        {{ next.title }}
        <ArrowRightIcon class="ml-2" size="1x" />
      </g-link>
    </div>
  </div>
</template>

<script>
import { ArrowLeftIcon, ArrowRightIcon } from 'vue-feather-icons'

export default {
  components: {
    ArrowLeftIcon,
    ArrowRightIcon,
  },

  computed: {
    page() {
      return this.$page.markdownPage
    },

    pages() {
      return this.$page.allMarkdownPage.edges.map((edge) => edge.node)
    },

    // flatten chapter and section indices onto page data, i.e.,
    // convert [{ chapter [{ sections [{ pages }]}]}]
    // to [{ page, sectionIndex, chapterIndex }]
    chapterPages() {
      return this.chapters
        .reduce((chapterMemo, chapter, chapterIndex) => {
          return [
            ...chapterMemo,
            chapter.sections.reduce((sectionMemo, section, sectionIndex) => {
              return [
                ...sectionMemo,
                section.items.map((path) => ({
                  ...this.pages.find((page) => page.path === path),
                  chapter: chapterIndex,
                  section: sectionIndex,
                })),
              ]
            }, []),
          ]
        }, [])
        .flat()
        .flat()
    },

    chapters() {
      return this.$static.metadata.settings.sidebar
    },

    sections() {
      return this.chapters.map((chapter) => chapter.sections).flat()
    },

    currentPageIndex() {
      return this.chapterPages.findIndex((page) => page.path === this.page.path)
    },

    currentChapterPage() {
      return this.chapterPages[this.currentPageIndex]
    },

    next() {
      return this.pageLink(this.chapterPages[this.currentPageIndex + 1])
    },

    prev() {
      return this.pageLink(this.chapterPages[this.currentPageIndex - 1])
    },
  },

  methods: {
    pageLink(page) {
      if (!page) return false
      if (!this.currentChapterPage) return false

      if (page.chapter !== this.currentChapterPage.chapter) {
        // Send to first page of chapter
        // page = this.chapterPages.find((p) => p.chapter === page.chapter)
        return {
          ...page,
          title: this.chapters[page.chapter].title,
        }
      }

      if (page.section !== this.currentChapterPage.section) {
        return {
          ...page,
          title: `${this.sections[page.section].title}: ${page.title}`,
        }
      }

      return page
    },
  },
}
</script>

<static-query>
query NextPrevLinks {
  metadata {
    settings {
      sidebar {
        title
        sections {
          title
          items
        }
      }
    }
  }
}
</static-query>
