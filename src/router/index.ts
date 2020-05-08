import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '@/views/Details.vue';
import Create from '@/views/Create.vue';
import NotFound from '@/views/NotFound.vue';
import Edit from '@/views/Edit.vue';
import UsersBlogs from '@/views/UsersBlogs.vue';

Vue.use(VueRouter);

  const routes: Array<RouteConfig> = [
    {
      path:'/',
      name:'Home',
      component:Home
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
      path:'/usersblogs',
      name:'usersBlogs',
      component: UsersBlogs
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
