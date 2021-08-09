<template>
    <li class="ul-box">{{ todo.text }}
        <button @click="$emit('remove', todo.id)">x</button>
        <input type="checkbox" value="했다" v-model="todo.check" @click="time">
        <label v-if="todo.check!=false">{{checktime}}</label>
    </li>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    data(){
           return{
                     checktime:1
           }
    },
    methods:{
           time(){
                  this.checktime=new Date().getHours()%12+"시"+new Date().getMinutes()+"분";
                 
           }
    }
}
</script>