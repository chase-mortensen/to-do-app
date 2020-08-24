<template>
  <v-container
    class="fill-height"
    fluid
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
          <v-toolbar
            color="deep-purple accent-4"
            dark
          >
            <v-toolbar-title>to-do-app</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-list>
            <v-list-item
              v-for="(item, i) in todoItems.filter(item => !item.complete)"
              :key="i"
              @click="console.log()"
            >
              <v-list-item-avatar>
                <v-checkbox v-model="item.complete"></v-checkbox>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon>
                <div class="my-2">
                  <v-btn small color="error">Delete</v-btn>
                </div>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list>
            <v-list-item
              v-for="(item, i) in todoItems.filter(item => item.complete)"
              :key="i"
              @click="console.log()"
            >
              <v-list-item-avatar>
                <v-checkbox v-model="item.complete"></v-checkbox>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon>
                <div class="my-2">
                  <v-btn small color="error">Delete</v-btn>
                </div>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      todoItems: [
        { complete: true, title: 'item 1' },
        { complete: true, title: 'item 2' },
        { complete: false, title: 'item 3', },
        { complete: false, title: 'item 4' },
      ],
    }),
    computed: {
    }
  }
</script>