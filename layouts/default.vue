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
  font-size: 1.4rem;
  color: #f0f0f0;
  font-family: 'Open Sans', sans-serif;
}

.default {
  padding: 1.4rem 2rem;
}

a {
  color: #f0f0f0;
}

h1 {
  font-size: 3rem;
}

h2 {
  margin-top: 1.4rem;
  margin-bottom: .2rem;
  font-size: 1.6rem;
}

h1,h2,h3,h4,h5,h6 {
  font-family: 'Ultra', serif;
}

@media (min-width: 576px) {
  h1 {
    font-size: 5rem;
  }

  h2 {
    margin-top: 2rem;
    margin-bottom: .5rem;
    font-size: 3.4rem;
  }
}

@media (min-width: 768px) {
  .default {
    max-width: 768px;
    margin: 0 auto;
    padding: 2rem 4rem;
  }
}

/*
@media (min-width: 992px) {

}

@media (min-width: 1200px) {

}
*/

/* smartphones, touchscreens */
@media (hover: none) and (pointer: coarse) {
    /* ... */
}

/* stylus-based screens */
@media (hover: none) and (pointer: fine) {
    /* ... */
}

/* Nintendo Wii controller, Microsoft Kinect */
@media (hover: hover) and (pointer: coarse) {
    /* ... */
}

/* mouse, touch pad */
@media (hover: hover) and (pointer: fine) {
    /* ... */
}

</style>
