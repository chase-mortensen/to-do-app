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
          </v-toolbar>
          
          <v-list>
            <v-text-field
            solo
            placeholder="Enter item here"
            v-model="newItem"
            @keyup.enter="addItem"
          ></v-text-field>
            <v-list-item
              v-for="item in todoItems.filter(item => !item.complete)"
              :key="item.id"
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
              v-for="item in todoItems.filter(item => item.complete)"
              :key="item.id"
              @click="console.log()"
            >
              <v-list-item-avatar>
                <v-checkbox v-model="item.complete"></v-checkbox>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title 
                style="text-decoration: line-through"
                v-text="item.title"></v-list-item-title>
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
      newItem: '',
      id: 4,
      todoItems: [
        { id: 0, complete: true, title: 'item 1' },
        { id: 1, complete: true, title: 'item 2' },
        { id: 2, complete: false, title: 'item 3', },
        { id: 3, complete: false, title: 'item 4' },
      ],
    }),
    methods: {
      addItem() {
        if (this.newItem.trim()) {
          this.todoItems.push({ id: this.id++, complete: false, title: this.newItem });
          this.newItem = '';
        }
      }
    }
  }
</script>