import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
       state: {
              userId: 'user',
              reviews:[]
       },
       mutations: {
              upstaeUserId(state, newId) {
                     state.userId = newId;
              },
              updateReviews(state,reviews) {
                     state.reviews = reviews;
              }
       },
       actions: {
              //원래 액션사용하면 stroe전체들어오는데 commit만 쓰려고
              getReviews({ commit }) {
               axios.get('/api/comments')
             .then(response=>{
                    commit('updateReviews',response.data)
              })
              .catch(err=>{
                     console.log(err)
              })
              }
       },
       getters: {
              //매개변수 안에 다른 개터쓰도 넣으면 계산에 사용할수 있음
              reviewCount(state) {
                     return state.reviews.length
              }
       }
})