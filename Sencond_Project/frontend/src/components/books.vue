<template>
       <v-container>
        <v-row>
            <v-col align="center">
                <h1>{{$store.state.bookInfo.title}} <span style="color:#AAAAAA"> {{$store.state.bookInfo.subtitle}}</span></h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-img contain max-height="250" :src="$store.state.bookInfo.cover"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center">
                <h3>작가: {{$store.state.bookInfo.author}} <span v-if="$store.state.bookInfo.translator">, 번역: {{$store.state.bookInfo.translator}}</span> ,{{$store.state.bookInfo.publisher}}</h3>
                <p>페이지: {{$store.state.bookInfo.page}}, 가격: {{currency($store.state.bookInfo.price)}}, ISBN: {{$store.state.bookInfo.ISBN}}</p>
                <p>{{$store.state.bookInfo.info}}</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
       name:'books',
      mounted(){
      this.$store.dispatch('mybook',this.$route.params.book_id);
    },
    methods:{
        currency(value){
            let num = new Number(value)
            const result = new Intl.NumberFormat("ko-KR", {
                style:"currency",
                currency:"KRW"
            })
            .format(num);
            return result;
        }
    }
}
</script>