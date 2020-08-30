<template>
  <v-list-item-icon>
    <div class="my-2">
      <v-btn class="mx-2" fab dark small 
      color="red darken-4"
      @click="removeItem(item.id)"
      >
        <v-icon light>mdi-delete</v-icon>
      </v-btn>
    </div>
  </v-list-item-icon>
</template>

<script>
export default {
  methods: {
    removeItem (id) {
      this.$store.commit('removeItem', { id });
      this.$http.put('https://to-do-app-e6306.firebaseio.com/data.json', this.$store.state.todoItems)
      .then(response => {
        // console.log(response);
      }, error => {
        // console.log(error);
      });
    },
  },
  props: ['item'],
}
</script>
