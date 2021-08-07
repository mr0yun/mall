import Vue from 'vue'
import Router from 'vue-router'

var Home = () =>
  import ('views/home/Home')
var Category = () =>
  import ('views/category/Category')
var Cart = () =>
  import ('views/cart/Cart')
var Profile = () =>
  import ('views/profile/Profile')
var Detail = () =>
  import ('views/detail/Detail')

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
  },
  {
    path: '/detail/:iid',
    component: Detail
  },
]

export default new Router({
  routes,
  mode: 'history'
})