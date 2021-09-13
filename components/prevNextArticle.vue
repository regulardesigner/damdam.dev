<template>
  <nav class="prev-next-section">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      class="prev"
      :title="prev.title"
    >
      Précédent <span class="curved-arrrow down-left">&#10150;</span>
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      class="next"
      :title="next.title"
    >
      <span class="curved-arrrow up-right">&#10149;</span> Suivant
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
  border-top: 1px dashed rgba(255,255,255,.2);
  margin-top: 2rem;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
}
.prev, .next {
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 1rem;
  padding: 1rem;
  background-color: rgba(255,255,255,1);
  color: #262a36;
  text-decoration: none;
}

.prev:hover,
.next:hover {
  text-decoration: underline;
}

.down-left {
  display: inline-block;
  transform: rotate(180deg);
}
</style>
