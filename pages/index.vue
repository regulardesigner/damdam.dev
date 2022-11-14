<template>
  <div>
    <article class="presentation">
      <h1>Hello there 👋 I'm Damien</h1>
      <h2 class="mb-1">JS Front-end Developer at Nextory.</h2>
      <p class="mb-3 italic stroke">ex Youboox, Webibli, Augment, S4M, Mediaconnect, backflip, Epcom</p>
      <h3 class="text-current mb-2">I'm keen on writing accessible web pages packed with a reasonable touch of JavaScript!</h3>
      <small>©2022 Damien Tailhades - Crafting websites since 1997. 😅 <a href="http://mastodon.social/@damsdev" target="_blank" aria-label="Want to contact me? You can find me on mastodon. The link will redirect you on Mastodon by open a new window in your browser.">Want to contact me?</a></small>
      <!-- <p>Here you can <a class="home-link" href="/blog">read my posts about what I learn</a> and <a class="home-link" href="/notes">my notes</a>.</p> -->
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
