import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'


const Home = { template: '<h1>Home</h1>' }

const router = createRouter({
   history: createWebHashHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'home',
         meta: { layout: 'main' },
         component: () => import('../views/HomePage.vue')
      },
      {
         path: '/aboutVAC',
         name: 'about',
         meta: { layout: 'main' },
         component: () => import('../views/AboutVAC.vue')
      },
      {
         path: '/:pathMatch(.*)*',
         name: 'error404',
         //meta: { layout: 'empty' },
         component: () => import('../views/404.vue')
      },
      {
         path: '/blog',
         name: 'blog',
         meta: { layout: 'main' },
         component: () => import('../views/BlogPage.vue')
      },
      {
         path: '/calculator',
         name: 'calculator',
         meta: { layout: 'main' },
         component: () => import('../views/Calculator.vue')
      },
      {
         path: '/car/:id',
         name: 'car',
         meta: { layout: 'main' },
         component: () => import('../views/CarPage.vue')
      },
      {
         path: '/catalog',
         name: 'catalog',
         meta: { layout: 'main' },
         component: () => import('../views/CatalogPage.vue')
      },
      {
         path: '/loan-rates',
         name: 'loan-rates',
         meta: { layout: 'main' },
         component: () => import('../views/LoanRates.vue')
      },
      {
         path: '/privacy-policy',
         name: 'privacy-policy',
         meta: { layout: 'main' },
         component: () => import('../views/PrivacyPolicy.vue')
      },
      {
         path: '/articles1/:id',
         name: 'articles1',
         meta: { layout: 'main' },
         component: () => import('../views/Articles.vue'),
         children: [
            {
               path: '1',
               name: '1',
               component: () => import('../components/Articles/1.vue')
            }, {
               path: '2',
               name: '2',
               component: () => import('../components/Articles/2.vue')
            }, {
               path: '3',
               name: '3',
               component: () => import('../components/Articles/3.vue')
            }, {
               path: '4',
               name: '4',
               component: () => import('../components/Articles/4.vue')
            }, {
               path: '5',
               name: '5',
               component: () => import('../components/Articles/5.vue')
            }, {
               path: '6',
               name: '6',
               component: () => import('../components/Articles/6.vue')
            }, {
               path: '7',
               name: '7',
               component: () => import('../components/Articles/7.vue')
            }, {
               path: '8',
               name: '8',
               component: () => import('../components/Articles/8.vue')
            }, {
               path: '9',
               name: '9',
               component: () => import('../components/Articles/9.vue')
            },
            {
               path: '10',
               name: '10',
               component: () => import('../components/Articles/10.vue')
            },
            {
               path: '11',
               name: '11',
               component: () => import('../components/Articles/11.vue')
            },
            {
               path: '12',
               name: '12',
               component: () => import('../components/Articles/12.vue')
            },
            {
               path: '13',
               name: '13',
               component: () => import('../components/Articles/13.vue')
            },
            {
               path: '14',
               name: '14',
               component: () => import('../components/Articles/14.vue')
            },
            {
               path: '15',
               name: '15',
               component: () => import('../components/Articles/15.vue')
            },
         ]
      },
      //Quiz
      {
         path: '/quiz/:id',
         name: 'quiz',
         meta: { layout: 'empty' },
         component: () => import('../views/Quiz.vue'),
         //children: [
         //   {
         //      path: '',
         //      name: 'what-budget',
         //      component: () => import('../components/Quiz/WhatBudget.vue')
         //   },
         //   {
         //      path: 'employment-status',
         //      name: 'employment-status',
         //      component: () => import('../components/Quiz/EmploymentStatus.vue')
         //   },
         //   {
         //      path: 'how-earn-income/:status',
         //      name: 'how-earn-income',
         //      component: () => import('../components/Quiz/HowEarnIncome.vue'),
         //      props: true,
         //   },
         //   {
         //      path: 'monthly-income/:status',
         //      name: 'monthly-income',
         //      component: () => import('../components/Quiz/MonthlyIncome.vue'),
         //      props: true,
         //   },
         //   {
         //      path: 'currently-working',
         //      name: 'currently-working',
         //      component: () => import('../components/Quiz/CurrentlyWorking.vue'),
         //      props: true,
         //   },
         //   {
         //      path: 'how-long-income',
         //      name: 'how-long-income',
         //      component: () => import('../components/Quiz/HowLongIncome.vue'),
         //      props: true,
         //   },
         //   {
         //      path: 'your-employment',
         //      name: 'your-employment',
         //      component: () => import('../components/Quiz/YourEmployment.vue'),
         //      props: true,
         //   },
         //   {
         //      path: 'how-long-receiving',
         //      name: 'how-long-receiving',
         //      component: () => import('../components/Quiz/HowLongReceiving.vue'),
         //      props: true,
         //   },
         //   {
         //      path: 'where-live',
         //      name: 'where-live',
         //      component: () => import('../components/Quiz/WhereLive.vue'),
         //      props: true,
         //   },
         //   {
         //      path: 'when-born',
         //      name: 'when-born',
         //      component: () => import('../components/Quiz/WhenBorn.vue'),
         //      props: true,
         //   },
         //   {
         //      path: 'last-step',
         //      name: 'last-step',
         //      component: () => import('../components/Quiz/LastStep.vue'),
         //      props: true,
         //   },
         //   {
         //      path: 'successful-application',
         //      name: 'successful-application',
         //      component: () => import('../components/Quiz/SuccessfulApplication.vue'),
         //      props: true,
         //   },
         //],
      },
      {
         path: '/terms-conditions',
         name: 'terms-conditions',
         meta: { layout: 'main' },
         component: () => import('../views/TermsConditions.vue')
      },
      {
         path: '/video',
         name: 'video',
         meta: { layout: 'main' },
         component: () => import('../views/Video.vue')
      },
      {
         path: '/menu',
         name: 'menu',
         //meta: {layout: 'main'},
         component: () => import('../components/Menu.vue')
      },
      {
         path: '/contact-us',
         name: 'contact-us',
         //meta: {layout: 'main'},
         component: () => import('../components/ContactUs.vue')
      },
   ],
   scrollBehavior(to, from, savedPosition) {
      //if (to.hash) {
      //   return {
      //      el: to.hash,
      //   }
      //}
      return savedPosition || { top: 0 }
   }
})


export default router
