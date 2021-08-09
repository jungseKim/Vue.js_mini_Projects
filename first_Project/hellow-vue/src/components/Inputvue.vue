<template>
       <div>
              <InputTest @go="cplus"></InputTest>
              <ul>
               <li class=""  v-for="n in user" :key="n">{{ n.name }} {{  n.content }}</li>
              </ul>
       </div>
</template>

<script>
import InputTest from './InputTest.vue';

export default {
        components:{
              InputTest
       },
       data(){
              return{
                     user:[]
              }
        },
       methods:{
              cplus(name,content){
                     this.user.push({name,content});
              }
       }
}
</script>