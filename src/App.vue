<template>
  <nav-app></nav-app>
  <router-view></router-view>
  <footer-app></footer-app>
</template>

<script>
import NavApp from './components/Navbar.vue'
import FooterApp from './components/Footer.vue'

export default {
  components: {
    NavApp,
    FooterApp
  }
}
</script>
