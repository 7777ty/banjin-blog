import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '@/views/Details.vue';
import Create from '@/views/Create.vue';
import NotFound from '@/views/NotFound.vue';
import Edit from '@/views/Edit.vue';
import UsersBlogs from '@/views/UsersBlogs.vue';
import MyBlogs from '@/views/MyBlogs.vue';
import Login from '@/views/Login.vue';
import SignUp from '@/views/SignUp.vue';

Vue.use(VueRouter);

  const routes: Array<RouteConfig> = [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'Home',
      component: Home
    },
    {
      path: '/details',
      name:'Details',
      component:Details
    },
    {
      path:'/create',
      name:'Create',
      component:Create
    },
    {
      path:'/edit',
      name:'Edit',
      component: Edit
    },
    {
      path:'/users-blogs',
      name:'UsersBlogs',
      component: UsersBlogs
    },
    {
      path:'/my-blogs',
      name:'MyBlogs',
      component: MyBlogs
    },
    {
      path:'/login',
      name:'Login',
      component: Login
    },
    {
      path:'/sign-up',
      name:'SignUp',
      component: SignUp
    },
    {
      path: '*',
      component: NotFound
    },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  routes
});

export default router
