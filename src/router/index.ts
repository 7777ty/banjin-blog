import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import Home from '../views/Home.vue'
// import Details from '@/views/Details.vue';
// import Create from '@/views/Create.vue';
// import NotFound from '@/views/NotFound.vue';
// import Edit from '@/views/Edit.vue';
// import UsersBlogs from '@/views/UsersBlogs.vue';
// import MyBlogs from '@/views/MyBlogs.vue';
// import Login from '@/views/Login.vue';
// import SignUp from '@/views/SignUp.vue';
import store from '@/store'

Vue.use(VueRouter);

function loadView(view: string) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

  const routes: Array<RouteConfig> = [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'Home',
      component: loadView('Home')
    },
    {
      path: '/details/:blogId',
      name:'Details',
      component:loadView('Details')
    },
    {
      path:'/create',
      name:'Create',
      component:loadView('Create'),
      meta:{requiresAuth:true}
    },
    {
      path:'/edit/:blogId',
      name:'Edit',
      component: loadView('Edit'),
      meta:{requiresAuth:true}
    },
    {
      path:'/users-blogs/:userId',
      name:'UsersBlogs',
      component: loadView('UserBlogs')
    },
    {
      path:'/my-blogs',
      name:'MyBlogs',
      component: loadView('MyBlogs'),
      meta:{requiresAuth:true}
    },
    {
      path:'/login',
      name:'Login',
      component: loadView('Login')
    },
    {
      path:'/sign-up',
      name:'SignUp',
      component:loadView('SignUp')
    },
    {
      path: '*',
      component:loadView('NotFound')
    },

];


const router = new VueRouter({
  routes
});


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin => {
      if (!isLogin) {
        next({
          path: '/login',
          query: {redirect: to.fullPath}
        })
      } else {
        next()
      }
    })
  }else {
  next() // 确保一定要调用 next()
}
});

export default router
