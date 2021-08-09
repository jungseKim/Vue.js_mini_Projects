<template>
       <div id="app">
              <h1>Event</h1>
              <h1>{{ event_title}}</h1>
              <h1>{{searched_event}}</h1>
               <h1>{{my_event}}</h1>
              </div>
</template>

<script>
export default {
       name:'event',
       props:['event_id','query_id'],
       computed:{
              event_title(){
                     if(this.event_id=='1'){
                            return '1+1 !'
                     }
                     else if(this.event_id=='2'){
                            return 'Free cookie'
                     }else 
                             return ' '
              },
              searched_event(){
                     if(this.query_id){
                          return '아이스 아메리카노'
                           }
                     else   return ' ' 
              },
              my_event(){
                     if(this.$route.query.event_id){
                          return '아이스 아메리카노'
                           }
                     else   return ' ' 
              }
       }
};
</script>