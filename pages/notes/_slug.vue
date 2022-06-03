<template>
  <div>
    <header>
      <navigation />
    </header>

    <article>
      <h1 class="notes-title">{{ note.title }} <small class="category">{{ note.category }}</small></h1>

      <p>{{ note.description }}</p>

      <nuxt-content :document="note" />

      <small>Published: {{ publicationDate(note.createdAt) }}</small>

      <prev-next-article :prev="prev" :next="next" />
    </article>
  </div>
</template>

<script>
export default {
  layout: 'blog',

  async asyncData({ $content, params }) {
      // fetch our notes here
      const note = await $content('notes', params.slug).fetch()

      const [prev, next] = await $content('notes')
      .only(['title', 'slug', 'category'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

      return { note, prev, next }
    },

  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: `https://www.damdam.dev${this.$route.path}`
        }
      ]
    }
  },

  methods: {
    publicationDate(date) {
      const publicationDate = new Date(date)
      return new Intl.DateTimeFormat('en-EN').format(publicationDate)
    }
  }
}
</script>

<style>
.notes-title {
  color: #262a36;
  padding: 1.4rem;
  margin-bottom: 2rem;
  background: rgb(255, 255, 183);
  background-color: #e5e5f7;
  background-image:  linear-gradient(rgb(240, 240, 4) 1px, transparent 1px), linear-gradient(to right, rgb(240, 240, 4) 1px, rgb(255, 255, 183) 1px);
  background-size: 14px 14px;
}

.category {
  font-size: 1.4rem;
  background-color: #f0f0f0;
  color: #262a36;
  padding: .4rem;
  border-radius: 0.4rem;
}
</style>
