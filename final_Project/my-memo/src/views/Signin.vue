<template>
  <div>
         <h1>signin</h1>
         <form @submit.prevent="onSubmit(userid,password)">
                <input type="text" v-model="userid" placeholder="user ID"/>
                <input type="password" v-model="password" placeholder="user ID"/>
                <input type="submit" value="Signin" />
         </form>
         <p><i>{{message}}</i></p>
  </div>
</template>

<script>

  export default {
    name: 'Singin',
    data(){
           return{
                  userid:'',
                  password:'',
                  message:''
           }
    },
    methods:{
           onSubmit(userid,password){
                  this.$store.dispatch('signin',{userid,password})
                  .then(()=>{
                         this.$store.state.myid=this.userid;
                         this.$router.push('/')
                  })
                  .catch(()=>{
                         this.message='fuck you'
                  })
           }
    }
  }
</script>