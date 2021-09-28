<template>
  <div>
    <article class="presentation">
      <h1>Hi there,</h1>
      <h2>I'm Damien and I'm a Front-end Developer at <a target="_blank" href="https://www.youboox.fr">Youboox</a>.</h2>
      <h2>I'm keen on writing accessible HTML and gorgeous CSS packed with a nice touch of JavaScript!</h2>
      <p>here you can <a href="/blog">read my blog posts</a> and <a href="/notes">my notes</a>.</p>
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
