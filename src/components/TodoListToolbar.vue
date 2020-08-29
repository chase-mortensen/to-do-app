<template>
  <v-toolbar
    color="blue-grey"
    light
  >
    <v-toolbar-title>to-do-app</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn 
      small 
      outlined
      color="normal"
      @click="updateListState('all')"
    >All</v-btn>
    <v-spacer></v-spacer>
    <v-btn 
      small 
      outlined
      color="normal"
      @click="updateListState('pending')"
    >Pending</v-btn>
    <v-spacer></v-spacer>
    <v-btn 
      small 
      outlined
      color="normal"
      @click="updateListState('complete')"
    >Complete</v-btn>

  </v-toolbar>
</template>

<script>
export default {
  methods: {
    updateListState (listState) {
      this.$store.commit('updateListState', { listState });
    },
  }
}
</script>
