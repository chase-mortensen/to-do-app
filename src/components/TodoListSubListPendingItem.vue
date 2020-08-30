<template>
  <v-list-item-content>
    <v-textarea
    :value="item.text"
    :shaped="item.editing"
    :filled="item.editing"
    auto-grow
    rows="1"
    :outlined="item.editing"
    @click="focusItem(item)"
    @input="setText(item, $event)"
    @blur="unfocusItem(item)"
    ></v-textarea>
  </v-list-item-content>
</template>

<script>
export default {
  methods: {
    focusItem (item) {
      this.$store.commit('focusItem', { item });
    },
    unfocusItem (item) {
      this.$store.commit('unfocusItem', { item });
      this.$http.put('https://to-do-app-e6306.firebaseio.com/data.json', this.$store.state.todoItems);
    },
    setText (item, event) {
      this.$store.commit('setText', { item, event });
    },
  },
  props: ['item'],
}
</script>
