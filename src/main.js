import Vue from 'vue'
import App from './App.vue'
import EventBus from './EventBus'

Vue.config.productionTip = false

window.EventBus = new EventBus();

new Vue({
  render: h => h(App),
}).$mount('#app')
