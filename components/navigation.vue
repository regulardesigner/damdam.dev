<template>
  <nav class="navigation">
    <ul class="navigation-list">
      <li class="navigation-item"><a class="navigation-link" href="/">home</a></li>
      <li class="navigation-item"><a class="navigation-link" href="/blog">articles</a></li>
      <li class="navigation-item"><a class="navigation-link" href="/notes">notes</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.navigation {
  margin: 1rem 0;
  text-align: right;
}

.navigation-item {
  display: inline-block;
  padding: 0 .4rem;
}

.navigation-item:first-child {
  padding-left: 0;
}

.navigation-item:last-child {
  padding-right: 0;
}
</style>
