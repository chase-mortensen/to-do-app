<template>
  <v-list
    :color="isPending ? 'blue-grey lighten-5' : 'blue-grey lighten-4'"
  >
    <v-list-item
      v-for="item in subList"
      :key="item.id"
    >
      <v-list-item-avatar>
        <v-checkbox v-model="item.complete"></v-checkbox>
      </v-list-item-avatar>
      

      <app-pending-item v-if="isPending" :item="item"></app-pending-item>
      <app-completed-item v-else :item="item"></app-completed-item>

      <app-list-icon :item="item"></app-list-icon>
    </v-list-item>
  </v-list>
</template>

<script>
import TodoListSubListPendingItem from './TodoListSubListPendingItem.vue';
import TodoListSubListCompletedItem from './TodoListSubListCompletedItem.vue';
import TodoListSubListIcon from './TodoListSubListIcon.vue';

export default {
  components: {
    'app-pending-item': TodoListSubListPendingItem,
    'app-completed-item': TodoListSubListCompletedItem,
    'app-list-icon': TodoListSubListIcon,
  },
  computed: {
    allPending () {
      return this.$store.state.todoItems.filter(item => !item.complete);
    },
    allComplete () {
      return this.$store.state.todoItems.filter(item => item.complete);
    },
    subList () {
      return this.isPending ? this.allPending : this.allComplete;
    }
  },
  props: {
    isPending: Boolean,
  },
}
</script>
