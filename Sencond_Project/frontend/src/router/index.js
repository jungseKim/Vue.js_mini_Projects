import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import books from '@/components/books.vue'
import search from '@/components/search.vue'
Vue.use(VueRouter)

export default new VueRouter({
       mode: 'history',
       ase: process.env.BASE_URL,
       routes: [
              { path: '/', component: Home },
              { path: '/api/books/:book_id', component: books },
              { path: '/search/:names', component: search }
              
       ]
})
