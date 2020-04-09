import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Pagination from 'ms-vue-simple-pagination'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper);
Vue.use(Pagination);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
