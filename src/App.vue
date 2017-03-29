<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
// Get child components
import AppHeader from './components/app-header.vue'

export default {
  components: { AppHeader },
  name: 'app',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  background: #ccc;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-width: 300px;
  min-height: 500px;
}

h2 {
  font-weight: strong;
  text-align: center;
  font-size: 5em;
}
</style>
