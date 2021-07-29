import Vue from 'vue'
import Router from 'vue-router'

var Home = () =>
  import ('@/views/home/Home')
var Category = () =>
  import ('views/category/Category')
var Cart = () =>
  import ('views/cart/Cart')
var Profile = () =>
  import ('views/profile/Profile')

Vue.use(Router)

const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

export default new Router({
  routes,
  mode: 'history'
})