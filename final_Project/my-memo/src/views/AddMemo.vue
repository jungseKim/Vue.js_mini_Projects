<template>
  <div>
 <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6" >
          <v-text-field
            v-model="title"
            label="Title"
            counter
            maxlength="20"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="content"
            label="content"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
              <input type="file" @change="selectFile" ref="file">
         <button @click="addMemo">Save</button>
         
  </div>
</template>

<script>
import memoApi from '../apis/memos'
  export default {
    name: 'AddMemo',
    data(){
           return{
                  title:'',
                  content:'',
                  file:''
           }
    },
    methods:{
           selectFile(){
                  this.file=this.$refs.file.files[0]
           },
           addMemo(){
                  const data=new FormData();
                  data.append('title',this.title);
                  data.append('content',this.content);
                  data.append('file',this.file);

                  memoApi.addMemo(data)
                  .then(response=>{
                         console.log(response.status)
                         this.$router.push('/')
                  })
                  .catch(error=>{
                         console.log(error)
                  })
           }
    }
  }
</script>