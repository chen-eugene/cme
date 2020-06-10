import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Home from './pages/Home.vue'
import Introduce from './pages/introduce/Introduce'
import Group from './pages/group'

import Contact from './pages/contact/index'

import News from './pages/news'
import NewsDetail from './pages/news/detail'

import Case from './pages/case/index'
import Product from './pages/product/Product'
import Employ from './pages/employ/index'
import Culture from './pages/culture/index'

import Introduction from './pages/introduce/component/Introduction'
import Framework from './pages/introduce/component/Framework'
import Honor from './pages/introduce/component/Honor'
import Technology from './pages/introduce/component/Technology'
import Companion from './pages/introduce/component/Companion'
import IntroductionDetail from './pages/introduce/detail'


export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/news',
            name: 'News',
            component: News,
        },
        {
            path: '/product',
            name: 'Product',
            component: Product,
        },
        {
            path: '/introduce',
            name: 'Introduce',
            component: Introduce,
            children: [{
                path: '',
                redirect: 'introduction'
            }, {
                path: 'introduction',
                name: 'Introduction',
                component: Introduction,
                meta: {keepAlive: true},
            }, {
                path: 'framework',
                name: 'Framework',
                component: Framework,
                meta: {keepAlive: true},
            }, {
                path: 'honor',
                name: 'Honor',
                component: Honor,
                meta: {keepAlive: true},
            }, {
                path: 'technology',
                name: 'Technology',
                component: Technology,
                meta: {keepAlive: true},
            }, {
                path: 'companion',
                name: 'Companion',
                component: Companion,
                meta: {keepAlive: true},
            }, {
                path: 'detail',
                name: 'IntroductionDetail',
                component: IntroductionDetail
            },]
        },
        {
            path: '/case',
            name: 'Case',
            component: Case,
        },
        {
            path: '/employ',
            name: 'Employ',
            component: Employ,
        },
        {
            path: '/hr',
            name: 'Group',
            component: Group
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact,
        },
        {
            path: '/culture',
            name: Culture,
            component: Culture
        },
        {
            path: '/detail/:articleId',
            name: 'NewsDetail',
            component: NewsDetail
        },

    ]
})
