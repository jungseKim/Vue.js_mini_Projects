import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
       state: {
              accessToken: null,
              myid:null
       },
       getters: {
              isAuth(state) {
                     if (state.accessToken == null) return false;
                     return true
              }
       },
       mutations: {
              signin(state, payload) {
                     state.accessToken = payload.accessToken
                     localStorage.setItem('accessToken', state.accessToken)
                     console.log(localStorage.getItem('accessToken'))
              },
              signout(state) {
                     state.accessToken = null
                     localStorage.removeItem('accessToken')
                     location.reload();
              },
              loginFailed(state) {
                     state.accessToken = null;
                     localStorage.removeItem('accessToken');
              },
              getAccessToken(state) {
                     state.accessToken = localStorage.getItem('accessToken')
                     console.log(localStorage.getItem('accessToken'));
              }
       },
       actions: {
              signin({ commit }, payload) {
                     const data = { userid: payload.userid, password: payload.password }
                    
                     return axios.post('/api/auth/login', data)
                            .then(response => {
                                   if (response.status == 200) {
                                          commit('signin', { accessToken: response.data.token })
                                           console.log(data);
                            }
                            })
                            .catch((error) => {
                            commit('loginFailed')
                            return Promise.reject(error);
                            })
              }
       }
})