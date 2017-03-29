import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Landing from './components/landing.vue'
import OfficeHours from './components/office-hours.vue'

Vue.use(VueRouter);

const routes = [
  {
    'path': '/',
    'component': Landing
  },
  {
    'path': '/office-hours/:index',
    'component': OfficeHours,
    'props': true
  }
]

const router = new VueRouter({
  routes
})

// Initialize app
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
