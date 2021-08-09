<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <p class="text-h4 text--primary">
         유저 상세보기
      </p>
      <div class="text--primary"
      >
      아이디 :{{ user.userid }}
      </div>
    </v-card-text>
    <v-card-actions>
      <p
        text
        color="deep-purple accent-4"
      >
        nickname :{{ user.name==undefined?user.name:'없습니다' }}
      </p>
    </v-card-actions>
  </v-card>
</template>

<script>
import memoApi from '../apis/memos'
export default {
       name:'userinfo',
       data(){
              return{
                     user:{}
              }
       },
       mounted(){
        memoApi.getUser(this.$route.params.userid)
              .then(res=>{
                    //  console.log(res.data[1])
                    //  console.log(res.data);
                     this.user=res.data[0]
              })
              .catch(()=>
              console.log('aaa'))
       },
       computed:{

       }
       
}
</script>