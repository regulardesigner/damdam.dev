<template>
  <div>
    <navigation />
    <main id="content-body">
      <h1>This is how I read it.</h1>
      <p class="description">Make a collection of
      reading practices from the disabled community by interviewing readers.</p>

      <p><strong>You are on the landing page on my new project.</strong></p>
      <p>The idea is to understand how people read. What are their needs and what
      is required to have a great reading experience. Ultimately this could also helps
      provide insight to people how wants to create accessible reading experience to everyone.</p>
    </main>
  </div>
</template>

<script>
export default {
  layout: 'blog',
}
</script>

<style>
main {
  margin-top: 30vh;
}

.description {
  font-size: 2.2rem;
  margin-bottom: 2.4rem;
}

p {
  margin-bottom: 1.4rem;
}
</style>
