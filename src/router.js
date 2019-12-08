import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from './pages/Home.vue'
import News from './pages/news'
import Introduce from './pages/Introduce'
import Corp from './pages/corp'
import Group from './pages/group'
import Contact from './pages/contact'

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/news',
            name: 'News',
            component: News
        }, {
            path: '/introduce',
            name: 'Introduce',
            component: Introduce
        }, {
            path: '/product',
            name: 'Corp',
            component: Corp
        }, {
            path: '/hr',
            name: 'Group',
            component: Group
        }, {
            path: '/contact',
            name: 'Contact',
            component: Contact
        }
    ]
})