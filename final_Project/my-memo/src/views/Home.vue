<template>
  <div>
    <v-container fluid>
      <v-data-iterator :items="memos" hide-default-footer hide-default-header>
          <template v-slot:default="props">
           <v-row>
               <v-col v-for="memo in props.items" :key="memo.memoid" cols="4">
                              <v-card >
                                  <v-img v-if="memo.fileUrl" max-height="150" contain :src="'/api/'+memo.fileUrl"/>
                                  <v-img v-else max-height="150" contain src='http://1ononeespresso.com.au/wp-content/uploads/2016/07/noimage.png'/>
                                  
                                  <v-divider></v-divider>
                                  <v-card-title>
                                      <router-link :to="'memos/'+memo.memoid">{{memo.title}}</router-link>
                                  </v-card-title>
                                  <!-- <p>{{memo.fileUrl}}</p> -->
                                  <v-card-subtitle>{{memo.userid}}</v-card-subtitle>
                            </v-card>
                </v-col>
             </v-row>            
          </template>
      </v-data-iterator>
    </v-container>
  </div>
</template>

<script>
import memoApi from '../apis/memos'
  export default {
    name: 'Home',
    data(){
      return{
       memos:[]
      }
    },
    mounted(){
      memoApi.getMemos()
      .then(res=>{
        console.log(res.data)
        this.memos=res.data
      })
      .catch(()=>
      console.log('aaa'))
   }
  }
</script>
