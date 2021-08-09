<template>
<input type="text" :value="value" v-model="text" @click="add">

</template>

<script>
export default {
       props:{
              value:{
                     type:String,
                     default:''
              }
       }
       ,
       data(){
              return{
                     text:null
              }
       },
       methods:{
              add(){
                     this.$emit('addTodo',this.text);
              }
       }
}
</script>

