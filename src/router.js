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

import Case from './pages/case/index'
import CaseDetail from './pages/case/detail'
import CaseAuto from './pages/case/components/Auto'
import CaseExpress from './pages/case/components/Express'
import CaseInfo from './pages/case/components/Info'
import CaseWeld from './pages/case/components/Weld'

import Product from './pages/product/Product'
import ProductDetail from './pages/product/detail'
import OnOff from './pages/product/components/OnOff'
import Counter from './pages/product/components/Counter'

import Employ from './pages/employ/index'
import EmployDetail from './pages/employ/detail'
import EmployScemploy from './pages/employ/components/Scemploy'
import EmploySoemploy from './pages/employ/components/Soemploy'

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
            children: [
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
                    name: 'NewsDetail',
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
                },
                {
                    path: 'detail',
                    name: 'ProductDetail',
                    component: ProductDetail
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
        },
        {
            path: '/case',
            name: 'Case',
            component: Case,
            children: [
                {
                    path: 'auto',
                    name: 'auto',
                    component: CaseAuto
                },
                {
                    path: 'express',
                    name: 'express',
                    component: CaseExpress
                },
                {
                    path: 'info',
                    name: 'info',
                    component: CaseInfo
                },
                {
                    path: 'weld',
                    name: 'weld',
                    component: CaseWeld
                },
                {
                    path: 'detail',
                    name: 'CaseDetail',
                    component: CaseDetail
                }
            ]
        },
        {
            path: '/employ',
            name: 'Employ',
            component: Employ,
            children: [
                {
                    path: 'scemploy',
                    name: 'scemploy',
                    component: EmployScemploy
                },
                {
                    path: 'soemploy',
                    name: 'soemploy',
                    component: EmploySoemploy
                },
                {
                    path: 'detail',
                    name: 'EmployDetail',
                    component: EmployDetail
                },
            ]
        },
        {
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
