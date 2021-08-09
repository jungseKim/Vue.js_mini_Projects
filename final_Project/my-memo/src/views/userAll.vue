<template>
        <v-container fluid>
    <v-data-iterator
      :items="users"
      hide-default-footer
    >

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.userid"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">
           
             <router-link :to="'userInfo/'+item.userid">  user_id:    {{ item.userid }}</router-link>
              </v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>
                  <v-list-item-content>nikname:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.name=='undefined'?'없습니다':item.name  }}
                  </v-list-item-content>
                </v-list-item>


         
           
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-toolbar
          class="mt-2"
          color="indigo"
          dark
          flat
        >
          <v-toolbar-title class="subheading">
            멀봐
          </v-toolbar-title>
        </v-toolbar>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import memoApi from '../apis/memos'
export default {
       name:'userAll',
       data(){
              return{
                     users:[]
              }
       },
       mounted(){
              memoApi.getUsers()
               .then(res=>{
                     console.log(res.data)
                     this.users=res.data
              })
              .catch(()=>
              console.log('aaa'))
       }
       
}
</script>