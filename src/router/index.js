import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Product from '@/views/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/cart',
      name: 'cart',
      // lazy-load
      component: () => import ('@/views/ShoppingCart')
    },
    {
      path: '/success',
      name: 'success',
      // lazy-load
      component: () => import ('@/views/Success')
    }
  ]
})
