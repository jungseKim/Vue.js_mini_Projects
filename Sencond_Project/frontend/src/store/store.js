import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);


export default new Vuex.Store({
       state: {
              books: [],
              bookInfo:{},
              userid:'hi'
       },
       mutations: {
              saveBooks(state,data) {
                     state.books = data;
                     console.log(data);
              },
              mybook(state, data) {
                     console.log(data);
                     state.bookInfo = data;
              }
       },
       actions: {
              getReviews({ commit }) {
               axios.get('/api/books')
                      .then(response => {
                    commit('saveBooks', response.data)
                   
              })
              .catch(err=>{
                     console.log(err)
              })
              },
              mybook({ commit },num) {
                     axios.get('/api/books/' + num)
                            .then(response => {
                             commit('mybook', response.data)
                     })
              }
              
       },
       getters: {
            
       }
})