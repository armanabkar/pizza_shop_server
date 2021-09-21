<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue"
export default {
  components: {
    Navbar,
  },
}
</script>

<style >
body {
  background-image: url("./assets/home-background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
