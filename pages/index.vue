<template>
  <div>
    <article class="presentation">
      <h1>Hi there 👋</h1>
      <h2 class="mb-3">I'm Damien and I'm a Front-end Developer at Youboox.</h2>
      <h3 class="open-sans mb-2">I'm keen on writing accessible HTML and gorgeous CSS packed with a nice touch of JavaScript!</h3>
      <p>Here you can <a class="home-link" href="/blog">read my posts about what I learn</a> and <a class="home-link" href="/notes">my notes</a>.</p>
    </article>
  </div>
</template>

<script>
export default {
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
