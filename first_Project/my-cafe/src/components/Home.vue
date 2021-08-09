<template>
      <div id="app">
         <h1>welcome {{userId}}</h1>
          <input v-model="newId" type="text">
              <v-btn @click="saveUserId"
              elevation="2"
              >save</v-btn>

       <br>
    
       <v-btn  @click="updateReviews"
       elevation="2"
       icon
       >show</v-btn>
       <h1>{{reviewCount}}</h1>
       <v-simple-table>
              <template v-slot:default>
              <thead>
                     <tr>
                            <th>emill</th>
                            <th>commnet</th>
                     </tr>
              </thead>
              <tbody>
                     <tr v-for="item in reviews" :key="item.id">
                     <td>{{item.email}}</td>
                     <td>{{item.body}}</td>
                     </tr>
              </tbody>
              </template>
       </v-simple-table>
      </div>
</template>


<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
       name:'home',
       data(){
              return {newId:''}
       },
       computed:{
              ...mapState({
                     userId:state=>state.user.userId
              }),
              ...mapState('reviews',{
                     reviews:state=>state.reviews
              }),
              ...mapGetters('reviews',['reviewCount'])
       },
       methods:{
            ...mapMutations(['updateUserId']),
            ...mapActions('reviews',['getReviews']),
            saveUserId(){
                   this.updateUserId(this.newId)
            },
            updateReviews(){
                   this.getReviews()
            }
       }
};
</script>