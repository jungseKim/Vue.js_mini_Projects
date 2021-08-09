<template>
  <v-app>
    <v-app-bar
    app
    color="primary"
    height="100"
    dark>
     <v-btn to="/" text>
        <v-icon>mdi-home</v-icon>
        <span class="mr-2">HOME</span>
     </v-btn>
    <v-text-field
    color="success"
    loading
    height="60"
    focusable=true
    v-model="names"
    input v-on:keyup.enter="submit"
  ></v-text-field>
    <v-btn :to="'/search/'+names" text @click="go"><span class="mr-2">search</span></v-btn>
    <h1>지도</h1>
     </v-app-bar>
    <v-main>
            <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
   names:null
  }),
  methods:{
    go(){
      this.$router.go(this.$router.currentRoute);
    },
    submit(){
      console.log('aaaa');
      this.$router.push({path: '/search/'+this.names})
       this.$router.go(this.$router.currentRoute);
    }
  }
  
};
</script>
