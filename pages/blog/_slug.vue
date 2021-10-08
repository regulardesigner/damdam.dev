<template>
  <div>
    <header>
      <Navigation />
    </header>

    <article>
      <h1>{{ article.title }} <small class="category">{{ article.category }}</small></h1>
      <p>{{ article.description }}</p>
      <p>Publié le : {{ publicationDate(article.createdAt) }}</p>
      <nuxt-content :document="article" />

      <prev-next-article :prev="prev" :next="next" />
    </article>
  </div>
</template>

<script>
export default {
  layout: 'blog',

  async asyncData({ $content, params }) {
      // fetch our article here
      const article = await $content('articles', params.slug).fetch()

      const [prev, next] = await $content('articles')
      .only(['title', 'slug', 'category'])
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

<style>
.category {
  font-size: 1.4rem;
  background-color: #f0f0f0;
  color: #262a36;
  padding: .4rem;
  border-radius: 0.4rem;
}
</style>
