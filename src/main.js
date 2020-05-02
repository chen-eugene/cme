import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Pagination from 'ms-vue-simple-pagination'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import moment from 'moment'

Vue.use(VueAwesomeSwiper);
Vue.use(Pagination);
Vue.use(Viewer, {
    defaultOptions: {
        zIndex: 9999
    }
});

Vue.filter('date', function (value, fmt = 'YYYY-MM-DD') {
    return moment(value).format(fmt)
})

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
