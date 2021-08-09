<template>
       <div class>
       <input v-model='name'>
        <input v-model='content'>
        <button v-on:click="add">save</button>
        
       </div>
</template>

<script>
export default {
      data(){ 
             return {
              //객체를 만들어서 넘겨주는거
       //       user:[],
             name:null,
             content:null
             }
      },
      methods:{
             add(){ 
              this.$emit('go',this.name,this.content);
              this.name=null;
              this.content=null;
              // this.user.push(t2emp);
              //객체를 만들어서 유저 배열에 넣고싶다 근데 방법을 모르겠다.
              // this.user.push({ name:this.name,content:this.content});
             }
      }
}
</script>


