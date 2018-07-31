import Vue from 'vue'
import App from './App.vue'
import FastClick from 'fastclick' 
import router from './router/router.js'


FastClick.attach(document.body);
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
