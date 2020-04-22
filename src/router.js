import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Home from './pages/Home.vue'
import Introduce from './pages/introduce/Introduce'
import Group from './pages/group'

import Contact from './pages/contact/index'
import ContactUs from './pages/contact/component/ContactUs'
import LeaveWord from './pages/contact/component/LeaveWord'

import News from './pages/news'
import Company from './pages/news/components/Company'
import NewsProject from './pages/news/components/Project'
import NewsDetail from './pages/news/detail'

import Case from './pages/case/index'
// import CaseDetail from './pages/case/detail'
import CaseAuto from './pages/case/components/Auto'
import CaseExpress from './pages/case/components/Express'
import CaseInfo from './pages/case/components/Info'
import CaseWeld from './pages/case/components/Weld'

import Product from './pages/product/Product'
// import ProductDetail from './pages/product/detail'
import OnOff from './pages/product/components/OnOff'
import Counter from './pages/product/components/Counter'

import Employ from './pages/employ/index'
// import EmployDetail from './pages/employ/detail'
import EmployScemploy from './pages/employ/components/Scemploy'
import EmploySoemploy from './pages/employ/components/Soemploy'

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
            children: [
                {
                    path: 'company/:categoryId',
                    name: 'company',
                    component: Company,
                    meta: {keepAlive: true},
                },
                {
                    path: 'project/:categoryId',
                    name: 'project',
                    component: NewsProject,
                    meta: {keepAlive: true},
                }
            ]
        },
        {
            path: '/product',
            name: 'Product',
            component: Product,
            children: [
                {
                    path: 'onoff/:categoryId',
                    name: 'onoff',
                    component: OnOff,
                    meta: {keepAlive: true},
                },
                {
                    path: 'counter/:categoryId',
                    name: 'counter',
                    component: Counter,
                    meta: {keepAlive: true},
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
            children: [
                {
                    path: 'auto/:categoryId',
                    name: 'auto',
                    component: CaseAuto,
                    meta: {keepAlive: true},
                },
                {
                    path: 'express/:categoryId',
                    name: 'express',
                    component: CaseExpress,
                    meta: {keepAlive: true},
                },
                {
                    path: 'info/:categoryId',
                    name: 'info',
                    component: CaseInfo,
                    meta: {keepAlive: true},
                },
                {
                    path: 'weld/:categoryId',
                    name: 'weld',
                    component: CaseWeld,
                    meta: {keepAlive: true},
                }
            ]
        },
        {
            path: '/employ',
            name: 'Employ',
            component: Employ,
            children: [
                {
                    path: 'scemploy/:categoryId',
                    name: 'scemploy',
                    component: EmployScemploy
                },
                {
                    path: 'soemploy/:categoryId',
                    name: 'soemploy',
                    component: EmploySoemploy
                }
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
            component: Contact,
            children: [
                {
                    path: 'contactus/:categoryId',
                    name: 'contactus',
                    component: ContactUs
                },
                {
                    path: 'leaveword/:categoryId',
                    name: 'leaveword',
                    component: LeaveWord
                },
            ]
        },
        {
            path: '/detail/:articleId',
            name: 'NewsDetail',
            component: NewsDetail
        },

    ]
})
