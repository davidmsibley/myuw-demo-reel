<template>
  <div id="app">
    <app-header></app-header>
    <h2>Office Hours</h2>
    <office-hours :hours="config[0]"></office-hours>
  </div>
</template>

<script>
// Get child components
import AppHeader from './components/app-header.vue'
import OfficeHours from './components/office-hours.vue'

export default {
  components: { AppHeader, OfficeHours },
  name: 'app',
  data () {
    return {
      config : [
        {
          day: "Monday",
          time: {
            "from": "9am",
            "to": "3pm"
          },
          date: "April 17th"
        },
        {
          day: "Friday",
          time: {
            "from": "9am",
            "to": "1:30pm"
          },
          date: "April 14th"
        }
      ]
    }
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
