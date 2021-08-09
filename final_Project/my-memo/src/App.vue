<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <v-spacer></v-spacer>
      <v-btn @click="gohome">Home</v-btn>
      <v-btn @click="users">users</v-btn>
     
      <v-spacer></v-spacer>
      <v-btn v-if="$store.state.accessToken!=null" @click="remove">logout</v-btn>
       <v-btn v-else @click="SignUp">SignUp</v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
   methods:{
      remove(){
        localStorage.removeItem('accessToken');
        this.$store.state.accessToken=null;
        this.$router.go('signin');
      },
      gohome(){
        this.$router.push('/')
      },
      users(){
        if(this.$router.currentRoute.name!='userAll'){
        return     this.$router.push('/userAll')
        }
        return alert('현제 페이지 입니다')
      },
      SignUp(){
         this.$router.push('/signup')
      }
    },
};
</script>
