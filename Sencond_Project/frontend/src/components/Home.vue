<template>
  <div>
    <p></p>
    <v-container fluid>
      <v-data-iterator :items="$store.state.books" hide-default-footer hide-default-header>
          <template v-slot:default="props">
           <v-row>
               <v-col v-for="book in props.items" :key="book.bookId" cols="4">
                              <v-card >
                                  <v-img max-height="150" contain :src="book.cover"/>
                                  <v-divider></v-divider>
                                  <v-card-title>
                                      <router-link :to="'api/books/'+book.bookId">{{book.title}}</router-link>
                                  </v-card-title>
                                  <v-card-subtitle>{{book.author}}</v-card-subtitle>
                            </v-card>
                </v-col>
             </v-row>            
          </template>
      </v-data-iterator>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    mounted(){
      this.$store.dispatch('getReviews');
    }
  }
</script>
