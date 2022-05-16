<template>
  <nav class="navigation">
    <h1 class="navigation__head-title">Damdam.dev</h1>
    <ul class="navigation-list">
      <li class="navigation-item"><a class="navigation-link home-link" href="/">home</a></li>
      <li class="navigation-item"><a class="navigation-link home-link" href="/blog">articles</a></li>
      <li class="navigation-item"><a class="navigation-link home-link" href="/notes">notes</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 1rem 0;
  text-align: right;
}

.navigation__head-title {
  display: inline-block;
  font-size: 2.4rem;
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
