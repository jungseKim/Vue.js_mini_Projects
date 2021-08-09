<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img v-if="memo.fileUrl"
      class="white--text align-end"
      height="200px"
     :src="'/api/'+memo.fileUrl"
    />
     <v-img v-else
      class="white--text align-end"
      height="200px"
    src='http://1ononeespresso.com.au/wp-content/uploads/2016/07/noimage.png'
    />
      <v-card-title>제목 : {{memo.title}}</v-card-title>
   

    <v-card-subtitle class="pb-0">
     작성자: {{ memo.userid }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{memo.content}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn v-if="$store.state.myid==memo.userid"
        color="primary"
        text
        @click="remove(memo.memoid)"
      >
        삭제
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        수정
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import memoApi from '../apis/memos'

  export default {
    name: 'ReadMemo',
    data(){
      return {
        memo:{}
        
      }
    }
    ,
     mounted(){
          memoApi.getMemo(this.$route.params.memoId)
          .then(res=>{
            console.log(res.data)
            this.memo=res.data
          })
          .catch(()=>
          console.log('aaa'))
      },
      methods:{
        remove(data){
          memoApi.removeMemo(data)
          .then(response=>{
            console.log(response.data)
            this.$router.push('/')
          })
        }
      }
  }
</script>