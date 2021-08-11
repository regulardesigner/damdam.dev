<template>
  <nav class="prev-next-section">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      class="prev"
    >
      {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      class="next"
    >
      {{ next.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </nav>
</template>

<script>
  export default {
    props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      }
    }
  }
</script>

<style scoped>
.prev-next-section {
  display: flex;
  justify-content: space-between;
}
.prev, .next {
  font-weight: bold;
  font-size: 1.2rem;
  padding: 1rem;
  background-color: rgba(255,255,255,.1);
}
</style>
