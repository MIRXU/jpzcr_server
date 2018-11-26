<template>
  <div id="app">

    <main-app />
  </div>
</template>

<script>
import Main from './components/main'

export default {
  name: 'App',
  components: {
    "main-app":Main
  }
}
</script>

<style>
  @import "../static/css/reset.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
