
import axios from 'axios'


export default {
       namespaced:true,
       state:()=> ({
              reviews: []
       }),
       mutations: {
              updateReviews(state, reviews) {
                     state.reviews = reviews;
              }
       },
       actions: {

              getReviews({ commit }) {
                     axios.get('/api/comments')
                            .then(response => {
                                   commit('updateReviews', response.data)
                            })
                            .catch(err => {
                                   console.log(err)
                            })
              }
       },
       getters: {
              //만약 부모 state를 쓰고 싶으면 rootstate
              reviewCount(state) {
                     return state.reviews.length
              }
       }
}