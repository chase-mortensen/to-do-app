<template>
  <div id="app">
    <v-col cols="12" sm="6" md="3">
      <h1>to-do-list</h1>
      <v-text-field 
        label="Enter new to-do item" 
        name="newItem"
        solo
      ></v-text-field><br>
      <app-list-item v-for="(item, i) in list" :key="i">
        <v-text-field
          solo
          :value="item"
          disabled
        >

        </v-text-field>
      </app-list-item>
    </v-col>
  </div>
</template>

<script>
import ListItem from './components/ListItem';

export default {
  name: 'App',

  components: {
    'app-list-item': ListItem,
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
  margin-top: 60px;
}
</style>
