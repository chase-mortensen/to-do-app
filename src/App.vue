<template>
  <div id="app">
    <h1>to-do-app</h1>
    <p v-for="(toDo, i) in toDoList" :key="i">{{ toDo }}</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      toDoList: ['item 1', 'item 2'],
    }
  },
  components: {

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
