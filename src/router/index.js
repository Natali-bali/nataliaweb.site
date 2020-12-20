import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Portfolio from '../views/Portfolio.vue';
import Contact from '../views/Contact.vue';


const routes = [
  { path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/about',
    name: 'About',
    component: About
  },
  { path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  { path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/:notFound(.*)',
    redirect: '/home'
  }
]
// const windowHeight = window.innerHeight - 20;
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   }
  //   if (to.hash == '#about') {
  //     return {left: 0,  top: windowHeight}
  //   }
  //   else {
  //   return { left: 0, top: 0}}
  // }
})
export default router
