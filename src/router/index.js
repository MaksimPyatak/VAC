import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
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
         meta: { layout: 'empty' },
         component: () => import('../views/404.vue')
      },
      {
         path: '/articles1',
         name: 'articles1',
         meta: { layout: 'main' },
         component: () => import('../views/Articles.vue')
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
         path: '/quiz',
         name: 'quiz',
         meta: { layout: 'main' },
         component: () => import('../views/Quiz.vue')
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
      return { x: 0, y: 0 }
   }
})

export default router
