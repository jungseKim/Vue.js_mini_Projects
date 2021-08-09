<template>
       <v-container fluid>
      <v-data-iterator :items="temp" hide-default-footer hide-default-header>
          <template v-slot:default="props">
           <v-row>
               <v-col v-for="book in props.items" :key="book.bloggerlink" cols="4">
                             <v-card class="text-center">
                                <!-- <v-img max-height="150" contain :src="book.cover"/> -->
                                <v-divider></v-divider>
                                <v-card-title  class="orange lighten-2">
                                    <!-- <a :href="book.bloggerlink">{{book_title(book.bloggerlink)}}</a> -->
                               <!-- <c:out value="${}" escapeXml="true" /> -->
                                   <p >{{book_title(book.bloggerlink)}}</p>
                                </v-card-title>
                                <a :href="book.bloggerlink">출처: {{book.bloggername}}</a>
                                <v-card-subtitle>날짜: {{book.postdate}}</v-card-subtitle>
                            </v-card>
                </v-col>
             </v-row>            
          </template>
      </v-data-iterator>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    data(){
           return{
                  temp:[],
           }
    },
    methods:{
           book_title(bloggerlink){
                 let hihi=null;
                  this.temp.forEach(element => {
                           if(element.bloggerlink==bloggerlink){
                                 console.log(element.title.replace('<b>',''))
                                  console.log(element.bloggerlink==bloggerlink)
                                hihi= element.title.replaceAll('<b>','')
                                hihi= hihi.replaceAll('</b>','')
                         }
                  });
                  return hihi;
           },
    },
    mounted(){
        axios.get(`/myse/${this.$route.params.names}`)
        .then(response=>{
          
            this.temp = JSON.parse(response.data).items
              console.log(this.temp[1])
            
          
        })
        .catch(err=>{
            this.err_msg = err.err_msg
        })
    }

}
</script>