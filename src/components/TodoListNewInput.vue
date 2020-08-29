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
      this.$store.commit('addItem')
    },
    updateNewItem (item) {
      this.$store.commit('updateNewItem', { item });
    },
  }
}
</script>
