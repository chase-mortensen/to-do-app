<template>
  <v-container
    class="fill-height"
    fluid
    style="background-color: #263238"
  >
    <v-row
      align="center"
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
  }
</script>