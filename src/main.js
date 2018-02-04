import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import EventBus from './plugins/event-bus'

Vue.use(Vuelidate)
Vue.use(EventBus)

new Vue({
  el: '#app',
  render: h => h(App)
})
