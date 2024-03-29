<template>
  <nav class="navigation">
    <ul class="navigation-list">
      <li class="navigation-item"><router-link to="/">home</router-link></li>
      <li class="navigation-item"><router-link to="/blog">articles</router-link></li>
      <li class="navigation-item"><router-link to="/notes">notes</router-link></li>
    </ul>
  </nav>
</template>

<style>
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
