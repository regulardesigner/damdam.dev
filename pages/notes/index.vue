<template>
  <div>
    <navigation />
    <ul>
      <li v-for="note in notes" :key="note.slug" class="note-list">
        <nuxt-link class="note-link" :to="{ name: 'notes-slug', params: { slug: note.slug }}">
          <h2 class="title">{{ note.title }}</h2>
          <p class="description">&#10149; {{ note.description }}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'blog',

  async asyncData({ $content, params }) {
    const notes = await $content('notes')
    .only(['title', 'description', 'slug'])
    .sortBy('createdAt', 'desc')
    .fetch()

    return {
      notes
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
.note-link {
  padding-bottom: 2rem;
  display: block;
  text-decoration: none;
  transition: all 250ms;
}

.description {
  /* font-size: 1.6rem; */
}
</style>
