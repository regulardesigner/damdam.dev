<template>
  <div>
    <header>
      <Navigation />
    </header>

    <article>
      <h1>{{ note.title }} <small class="category">{{ note.category }}</small></h1>
      <p>{{ note.description }}</p>
      <p>Publié le : {{ publicationDate(note.createdAt) }}</p>
      <nuxt-content :document="note" />

      <prev-next-article :prev="prev" :next="next" />
    </article>
  </div>
</template>

<script>
export default {
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
      return new Intl.DateTimeFormat('fr-FR').format(publicationDate)
    }
  }
}
</script>

<style>
.category {
  font-size: 1.4rem;
  background-color: #f0f0f0;
  color: #262a36;
  padding: .4rem;
  border-radius: 0.4rem;
}
</style>
