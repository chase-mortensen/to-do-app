<template>
  <v-text-field
    solo
    hide-details="auto"
    placeholder="Enter new item here"
    :value="this.$store.state.newItem"
    @input="updateNewItem"
    @keyup.enter="addItem"
  ></v-text-field>
</template>

<script>
export default {
  methods: {
    addItem () {
      this.$store.commit('addItem');
      this.$store.commit('updateId');
      this.$http.put('https://to-do-app-e6306.firebaseio.com/id.json', this.$store.state.id);
      this.$http.put('https://to-do-app-e6306.firebaseio.com/data.json', this.$store.state.todoItems);
    },
    updateNewItem (item) {
      this.$store.commit('updateNewItem', { item });
    },
  }
}
</script>
