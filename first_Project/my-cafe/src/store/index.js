import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import reviews from './modules/reviews'

Vue.use(Vuex);

export default new Vuex.Store({
       modules: {
              user,
              reviews
       }
})

//임폴트할때 경로 생각좀잘하고
//map 에서 이름을 잘생각하길 
//namesapced를 사용했을때 어떻게 되는지 한번더 생각하기