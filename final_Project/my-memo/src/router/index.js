import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Add from '../views/AddMemo.vue'
import Read from '../views/ReadMemo.vue'
import Signin from '../views/Signin'
import Signup from '../views/Signup'
import userAll from '../views/userAll'
import userInfo from '../views/userInfo'


Vue.use(VueRouter)

// const auth = (to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiesAuth)) {
//     if (localStorage.getItem('accessToken') == null) {
//       alert('Signin please')
//       next('/signin');
//     }
//   }
//   next();
// }

const routes = [
  { path: '/',name:'Home', component: Home,meta:{requiesAuth:true} },
  { path: '/add', name:'Add', component: Add,meta:{requiesAuth:true} },
  { path: '/memos/:memoId', name: 'Read', component: Read,meta:{requiesAuth:true}},
  { path: '/signin',name:'Signin', component: Signin },
  {
    path: '/signup', name: 'Signup', component: Signup,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('accessToken') != null) {
        alert('이미 회원입니다')

      }else next()
  
    }  },
  { path: '/userAll', name: 'userAll', component: userAll },
  { path: '/userInfo/:userid',name:'userInfo', component: userInfo }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiesAuth)) {
    if (localStorage.getItem('accessToken') == null) {
      alert('Signin please')
      next('/signin');
    }
     else {
    next();
  }
  }
   else {
    next();
  }
  
});

export default router