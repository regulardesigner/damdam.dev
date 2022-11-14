<template>
    <div class="default">
      <nuxt/>
    </div>
</template>

<script>
export default {

}
</script>

<style>
/* outfit-regular - latin */
@font-face {
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  -webkit-font-smooth: never;
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  src: url('~assets/fonts/outfit-v6-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('~assets/fonts/outfit-v6-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('~assets/fonts/outfit-v6-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('~assets/fonts/outfit-v6-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('~assets/fonts/outfit-v6-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('~assets/fonts/outfit-v6-latin-regular.svg#Outfit') format('svg'); /* Legacy iOS */
}

/* outfit-900 - latin */
@font-face {
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  -webkit-font-smooth: never;
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  src: url('~assets/fonts/outfit-v6-latin-900.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('~assets/fonts/outfit-v6-latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('~assets/fonts/outfit-v6-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
       url('~assets/fonts/outfit-v6-latin-900.woff') format('woff'), /* Modern Browsers */
       url('~assets/fonts/outfit-v6-latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
       url('~assets/fonts/outfit-v6-latin-900.svg#Outfit') format('svg'); /* Legacy iOS */
}


html {
  font-size: .625em; /* fallback IE8+ */
  font-size: calc(1em * .625); /* IE9-IE11 math fixing. See http://bit.ly/1g4X0bX */
}

body {
  background: #262a36;
  font-size: 1.6rem;
  color: #f0f0f0;
  font-family: 'Outfit', sans-serif;
  font-weight: 400;
}

.default {
  letter-spacing: 0.05rem;
  padding: 1.4rem 2rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.italic {
  font-style: italic;
}

.stroke {
  opacity: 0.6;
  text-decoration: line-through;
}

a {
  color: #f0f0f0;
  transition: all 350ms linear;
}

.home-link {
  text-decoration: none;
  border-bottom: dotted thin #f0f0f0;
}

.home-link:hover {
  border-bottom: dotted thin transparent;
  color: #262a36;
  box-shadow: inset 0 -100px 0 #dfd481;
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
  letter-spacing: 0.02rem;
  font-weight: 900;
}

.text-current {
  letter-spacing: 0.05rem;
  font-weight: 400;
}

.mb-2 {
  margin-bottom: 2rem;
}
.mb-3 {
  margin-bottom: 3rem;
}
.mb-4 {
  margin-bottom: 4rem;
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
