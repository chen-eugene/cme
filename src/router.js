import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// import Home from './pages/Home.vue'
import Introduce from './pages/introduce/Introduce'
import Group from './pages/group'
import Contact from './pages/contact'

import News from './pages/news'
import Company from './pages/news/components/Company'
import NewsProject from './pages/news/components/Project'
import NewsDetail from './pages/news/detail'

import Product from './pages/product/Product'
import OnOff from './pages/product/components/OnOff'
import Counter from './pages/product/components/Counter'

import Introduction from './pages/introduce/component/Introduction'
import Framework from './pages/introduce/component/Framework'
import Honor from './pages/introduce/component/Honor'
import Technology from './pages/introduce/component/Technology'
import Companion from './pages/introduce/component/Companion'


export default new Router({
    routes: [
        {
            path: '/',
            redirect: 'introduce'
        },
        {
            path: '/news',
            name: 'News',
            component: News,
            children:[
                {
                    path: 'company',
                    name: 'company',
                    component: Company
                },
                {
                    path: 'project',
                    name: 'project',
                    component: NewsProject
                },
                {
                    path: 'detail',
                    name: 'detail',
                    component: NewsDetail
                }
            ]
        },
        {
            path: '/product',
            name: 'Product',
            component: Product,
            children: [
                {
                    path: 'onoff',
                    name: 'onoff',
                    component: OnOff
                },
                {
                    path: 'counter',
                    name: 'counter',
                    component: Counter
                }
            ]
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
                component: Introduction
            }, {
                path: 'framework',
                name: 'Framework',
                component: Framework
            }, {
                path: 'honor',
                name: 'Honor',
                component: Honor
            }, {
                path: 'technology',
                name: 'Technology',
                component: Technology
            }, {
                path: 'companion',
                name: 'Companion',
                component: Companion
            },]
        }, {
            path: '/hr',
            name: 'Group',
            component: Group
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        }, {
            path: '/news/detail/:id',
            name: 'NewsDetail',
            component: NewsDetail
        },

    ]
})
