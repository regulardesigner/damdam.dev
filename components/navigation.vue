<template>
  <nav class="navigation">
    <h1 class="navigation__head-title">damdam.dev</h1>
    <ul class="navigation-list">
      <li class="navigation-item"><a class="navigation-link home-link" href="/">home</a></li>
      <li class="navigation-item"><a class="navigation-link home-link" href="/blog">articles</a></li>
      <li class="navigation-item"><a class="navigation-link home-link" href="/notes">notes</a></li>
      <li class="navigation-item"><a class="navigation-link home-link" href="/how-i-read-it">how I read it</a></li>
      <li class="navigation-item"><a class="navigation-link home-link" href="/timeline">timeline</a></li>
    </ul>
    <themes-checkbox />
  </nav>
</template>

<style scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 2rem 0 4rem 0;
}

.navigation__head-title {
  display: inline-block;
  font-size: 2rem;
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
