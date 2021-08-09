<template>
    <div>
           <button v-if="todos.length" @click="all">했는 목록 지우기</button>
        <BaseInputText v-model="newTodoText" placeholder="New todo" @keydown.enter="addTodo"/>
        <ul v-if="todos.length">
            <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" @remove="removeTodo"/>
        </ul>
        <p v-else>
            Nothing left in the list. Add a new todo in the input above.
        </p>
    </div>
    
</template>

<script>
import TodoListItem from './TodoListItem.vue';
import BaseInputText from './BaseInputText.vue';

let nextTodoId = 1;

export default {
    name:'TodoList',
    components:{
        TodoListItem,
        BaseInputText
    },
    data() {
        return {
            newTodoText: '',
            todos: [],
        }
    },
    methods: {
        addTodo() {
            const trimmedText = this.newTodoText.trim();
            if(trimmedText) {
                this.todos.push({
                    id: nextTodoId++,
                    text: trimmedText,
                    check:false
                });
                this.newTodoText = '';
            }
        },
        removeTodo (idToRemove) {
            this.todos = this.todos.filter(todo => {
                return todo.id !== idToRemove;
            })
        },
        all(){
             
              this.todos = this.todos.filter(todo => {
                return todo.check ===false ;
            }) 
        }
    }
}
</script>

<style>

</style>