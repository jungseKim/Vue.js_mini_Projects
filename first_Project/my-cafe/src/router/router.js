import Vue from "vue";
import VueRouter from "vue-router";

import Home from '@/components/Home.vue'
import Menus from '@/components/Menus.vue'
import Event from '@/components/Event.vue'
import Reviews from '@/components/Reviews.vue'

Vue.use(VueRouter);

export default new VueRouter({
       mode: 'history',
       routes: [
              { path: '/', component: Home },
              { path: '/menus', component: Menus },
              { path: '/menus/:menu_id', component: Menus },
              { path: '/event', component: Event ,props:(route)=>({query_id:route.query.event_id})},
              { path: '/event/:event_id', component: Event,props:true },
              { path: '/Reviews', component: Reviews }
              
       ]
})