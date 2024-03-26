<template>
  <label id="website-themes" for="theme-toggle">
    <input id="theme-toggle" type="checkbox" :checked="isDarkTheme" @change="toggleTheme">
    Theme switcher ({{ isDarkTheme ? 'dark' : 'light' }})
  </label>
</template>

<script>
export default {
  data() {
    return {
      isDarkTheme: this.getCookie('theme') === 'dark'
    }
  },

  methods: {
    toggleTheme() {
      // Toggle the isDarkTheme flag
      this.isDarkTheme = !this.isDarkTheme
      // Set a cookie 'theme' with the value of the current theme ('dark' or 'light')
      // The cookie will expire in 365 days
      this.setCookie('theme', this.isDarkTheme ? 'dark' : 'light', 365)
    },

    setCookie(name, value, days) {
      let expires = "";
      // If an expiration number of days is provided
      if (days) {
        const date = new Date();
        // Set the expiration date to the current time plus the number of days
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
      }
      // Set the cookie with the provided name and value, and the calculated expiration date
      document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    },

    getCookie(name) {
      // Append "=" to the cookie name
      const nameEQ = name + "=";
      // Split the document.cookie string into an array of individual cookie strings
      const ca = document.cookie.split(';');
      // Find the cookie that starts with the name we're looking for
      const cookie = ca.find(c => {
        return c.trim().startsWith(nameEQ);
      });


      // If the cookie is found
      if (cookie) {
        // Return the value of the cookie (the part of the string after the '=')
        return cookie.substring(nameEQ.length + 1);
      }
      // If the cookie with the provided name is not found, set a default value
      const defaultValue = 'dark';
      // Set a cookie with the provided name, the default value, and an expiration of 365 days
      this.setCookie(name, defaultValue, 365);
      // Return the default value
      return defaultValue;
    }
  }
}
</script>

<style>
#website-themes {
  /* I want to create a light and dark toggle button with and sun and night icon in the top right corner of the page */
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
}

#theme-toggle {
  display: none;
}
</style>
