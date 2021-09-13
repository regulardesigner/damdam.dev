<template>
  <div>
    <header>
      <a href="/">Retour accueil</a>
    </header>

    <article>
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <p>Publié le : {{ publicationDate(article.updatedAt) }}</p>
      <nuxt-content :document="article" />

      <prev-next-article :prev="prev" :next="next" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
      // fetch our article here
      const article = await $content('articles', params.slug).fetch()

      const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

      return { article, prev, next }
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
