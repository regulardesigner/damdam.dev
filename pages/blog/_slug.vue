<template>
  <div>
    <header>
      <Navigation />
    </header>

    <article>
      <h1 class="article-title">{{ article.title }} <small class="category">{{ article.category }}</small></h1>

      <p>{{ article.description }}</p>

      <nuxt-content :document="article" />

      <small>Published: {{ publicationDate(article.createdAt) }}</small>

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
.article-title {
  border: 4px solid white;
  padding: 1.4rem;
  margin-bottom: 2rem;
  border-image:   linear-gradient(45deg, #f8546b 25%, #ffdb60 50%, #00a093 100%) 100;
}

.category {
  font-size: 1.4rem;
  background-color: #f0f0f0;
  color: #262a36;
  padding: .4rem;
  border-radius: 0.4rem;
}
</style>
