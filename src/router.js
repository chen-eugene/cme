import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Home from './pages/Home.vue'
import Introduce from './pages/introduce/Introduce'
import Group from './pages/group'
import Contact from './pages/contact'
import NewsDetail from './pages/news/detail'

import News from './pages/news'
import Composite from './pages/news/components/Composite'
import Marketing from './pages/news/components/Marketing'
import Speech from './pages/news/components/Speech'

import Product from './pages/product/Product'
import Equipment from './pages/product/components/Equipment'
import Electronic from './pages/product/components/Electronic'
import Intelligent from './pages/product/components/Intelligent'
import Project from './pages/product/components/Project'
import Transportation from './pages/product/components/Transportation'

import Introduction from './pages/introduce/component/Introduction'
import Framework from './pages/introduce/component/Framework'
import Honor from './pages/introduce/component/Honor'
import Technology from './pages/introduce/component/Technology'
import Companion from './pages/introduce/component/Companion'


export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/news',
            name: 'News',
            component: News,
            children:[
                {
                    path: '',
                    redirect: 'composite'
                },
                {
                    path: 'composite',
                    name: 'Composite',
                    component: Composite
                },
                {
                    path: 'marketing',
                    name: 'Marketing',
                    component: Marketing
                },
                {
                    path: 'speech',
                    name: 'Speech',
                    component: Speech
                }
            ]
        },
        {
            path: '/product',
            name: 'Product',
            component: Product,
            children: [
                {
                    path: '',
                    redirect: 'equipment'
                },
                {
                    path: 'equipment',
                    name: 'Equipment',
                    component: Equipment
                },
                {
                    path: 'electronic',
                    name: 'Electronic',
                    component: Electronic
                },
                {
                    path: 'transportation',
                    name: 'Transportation',
                    component: Transportation
                },
                {
                    path: 'intelligent',
                    name: 'Intelligent',
                    component: Intelligent
                },
                {
                    path: 'project',
                    name: 'Project',
                    component: Project
                },

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
