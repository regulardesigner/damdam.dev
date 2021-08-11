<template>
    <div class="default">
      <nuxt/>
      <Footer class="footer"/>
    </div>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Ultra&display=swap');

html {
  font-size: .625em; /* fallback IE8+ */
  font-size: calc(1em * .625); /* IE9-IE11 math fixing. See http://bit.ly/1g4X0bX */
}

body {
  background: #262a36;
  color: #f0f0f0;
  font-family: 'Open Sans', sans-serif;
}

a {
  color: #f0f0f0;
}

.default {
  max-width: 768px;
  margin: 0 auto;
  padding: 2rem 4rem;
  border-radius: 1rem;
}

h1 {
  font-size: 5rem;
}

h2 {
  margin-top: 2rem;
  margin-bottom: .5rem;
  font-size: 3.4rem;
}

h1,h2,h3,h4,h5,h6 {
  font-family: 'Ultra', serif;
}
</style>
