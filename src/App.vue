<template>
  <div id="app">
    <v-app>
      <v-main>
        <app-todo-list></app-todo-list>
      </v-main>
    </v-app>
  </div>
</template>

<script>
// import ListItem from './components/ListItem';
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',

  components: {
    'app-todo-list': TodoList,
  },

  data: () => ({
    list: ['item 1', 'item 2', 'item 3'],
    currentTodo: ''
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: auto;
  margin-right: auto;
}
</style>
