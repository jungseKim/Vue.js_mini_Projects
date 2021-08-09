<template>
  <div>
 <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6" >
          <v-text-field
            v-model="userid"
            label="userid"
            counter
            maxlength="20"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="name"
            label="name"
          ></v-text-field>
        </v-col>

         <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="password"
            label="password"
            type="password"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  

    <v-btn  color="primary" @click="adduser">signup</v-btn> 
        <v-btn  @click="signin">signin</v-btn>
     

         
  </div>
</template>

<script>
// import memoApi from '../apis/memos'
//이거 엑시오스로 보내보기
import axios from 'axios'
  export default {
    name: 'Signup',
    data(){
           return{
                  userid:'',
                  name:'',
                  password:'',
           }
    },
    methods:{
           adduser(){
                  const data=new FormData();
                  data.append('userid',this.userid);
                  data.append('name',this.name);
                  data.append('password',this.password);

                  console.log(data);
                  axios.post('/api/users/',{
                   userid:this.userid,name:this.name,password:this.password
                  }).then(response=>{
                    console.log(response.data);
                  })
           },
           signin(){
             this.$router.push('signin')
           }
    }
  }
</script>