<template>
  <label id="website-themes">
    <input id="theme-toggle" type="checkbox" :checked="isDarkTheme" @change="toggleTheme">
    {{ isDarkTheme ? 'Dark' : 'Light' }} theme
  </label>
</template>

<script>
export default {
  data() {
    return {
      isDarkTheme: localStorage.getItem('theme') === 'dark'
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
    }
  }
}
</script>

<style>
#website-themes {
  cursor: pointer;
}

#theme-toggle {
  display: none;
}
</style>
