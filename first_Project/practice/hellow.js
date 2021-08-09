Vue.component('add',{
       template:'<button @click="add">{{ count}}</button>',
       data(){
              return {count:0}
       },
       methods:{
              add(){
                     this.count++;
                     this.$emit('add')
              }
       }
});

let app= new Vue({
       el:'#title',
       data:{
              total:0
       },
       methods:{
              add(){
                  
              }
       }
})