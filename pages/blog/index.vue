<template>
  <div>
    <ul>
      <li v-for="article in articles" :key="article.slug" class="article-list">
        <nuxt-link class="article-link" :to="{ name: 'blog-slug', params: { slug: article.slug }}">
          <h2 class="title">{{ article.title }}</h2>
          <p class="description">&#10149; {{ article.description }}</p>
        </nuxt-link>
      </li>
    </ul>
    <navigation />
  </div>
</template>

<script>
export default {
  layout: 'blog',

  async asyncData({ $content, params }) {
    const articles = await $content('articles')
    .only(['title', 'description', 'slug'])
    .sortBy('createdAt', 'desc')
    .fetch()

    return {
      articles
    }
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
  }
}
</script>

<style>
.article-link {
  padding-bottom: 2rem;
  display: block;
  text-decoration: none;
  transition: all 250ms;
}

.article-link:hover .title {
  text-decoration: underline;
}

.description {
  font-size: 1.6rem;
}

@media (hover: none) and (pointer: coarse) {
  .article-link,
  .article-link:hover,
  .article-link:focus {
    background-color: rgba(255,255,255, .05);
    border-radius: 1.8rem;
    padding: .6rem 2rem 2rem 2rem;
    margin-bottom: 2rem;
  }
}
</style>
