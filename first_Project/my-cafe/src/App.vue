<template>
  <v-app>
    <v-app-bar
    app
    color="primary"
    dark>
     <v-btn to="/" text>
        <v-icon>mdi-home</v-icon>
        <span class="mr-2">HOME</span>
     </v-btn>
    <v-btn to="/menus" text><span class="mr-2">menus</span></v-btn>
    <v-btn to="/event" text><span class="mr-2">events</span></v-btn>
    <v-btn to="/reviews" text><span class="mr-2">reviews</span></v-btn>
     </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
