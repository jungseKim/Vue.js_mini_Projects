<template>
  <div id="app">
    <h1 id="title">My Todo App!</h1>
    <!-- <ProductPage></ProductPage>
    <Refly></Refly> -->
    <TodoList></TodoList>
  </div>
</template>

<script>
// import ProductPage from './components/ProductPage.vue'
// import Refly from './components/Refly.vue';
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    // ProductPage,
    // Refly
    TodoList
  }
}
</script>

<style>
/* @import './assets/css/styles.css'; */

*, *::before, *::after{
  box-sizing: border-box;
}
    #app{
      max-width: 400px;
      margin: 0 auto;
      line-height: 1.4;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -moz-osx-font-smoothing: grayscale;
      color: #32485f;
    }

    h1{
      text-align: center;
    }
</style>