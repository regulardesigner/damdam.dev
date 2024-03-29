<template>
    <div class="default">
      <themes-checkbox />
      <nuxt/>
    </div>
</template>

<style>
html {
  font-size: .625em; /* fallback IE8+ */
  font-size: calc(1em * .625); /* IE9-IE11 math fixing. See http://bit.ly/1g4X0bX */
}

body {
  background: var(--background-color);
  font-size: 1.6rem;
  color: var(--text-color);
  font-family: "Shantell Sans", cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: "BNCE" -20, "INFM" 60, "SPAC" 10;
}

.default {
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
  color: var(--text-color);
}

.home-link {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.2rem;
  border-bottom: dotted thin var(--text-color);
}

.home-link:hover {
  border-bottom: dotted thin transparent;
  color: var(--text-color);
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
  font-weight: 800;
  font-variation-settings:
    "BNCE" -20,
    "INFM" 60,
    "SPAC" 0;
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
