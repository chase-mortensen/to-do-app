<template>
  <v-container
    class="fill-height"
    fluid
    style="background-color: #263238"
  >
    <v-row
      align="start"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card
        class="elevation-12"
        >
          <app-todo-list-toolbar></app-todo-list-toolbar>
          <div v-show="this.$store.state.listState !== 'complete'">
            <app-todo-list-new-input></app-todo-list-new-input>
            <app-todo-list-sub-list :isPending="true"></app-todo-list-sub-list>
          </div>
          <div v-show="this.$store.state.listState !== 'pending'">
            <app-todo-list-sub-list :isPending="false"></app-todo-list-sub-list>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TodoListToolbar from './TodoListToolbar.vue';
import TodoListNewInput from './TodoListNewInput.vue';
import TodoListSubList from './TodoListSubList.vue';

export default {
  components: {
    'app-todo-list-toolbar': TodoListToolbar,
    'app-todo-list-new-input': TodoListNewInput,
    'app-todo-list-sub-list': TodoListSubList,
  },
  created() {
    this.$http.get('https://to-do-app-e6306.firebaseio.com/data.json')
      .then(response => {
        return response.json();
      })
      .then(data => {
        const todoItems = [];
        for (let key in data) {
          todoItems.push(data[key]);
        }
        this.loadTodoItems(todoItems);
      });
    this.$http.get('https://to-do-app-e6306.firebaseio.com/id.json')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.loadId(data);
      });
  },
  methods: {
    loadTodoItems (todoItems) {
      this.$store.commit('loadTodoItems', { todoItems }); 
    },
    loadId (id) {
      this.$store.commit('loadId', { id }); 
    }
  },
}
</script>