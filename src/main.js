import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

// Use vue-resource for http methods
Vue.use(require('vue-resource'));
Vue.http.options.root = '/';

// Initialize app
new Vue({
  el: '#app',
  render: h => h(App)
})
