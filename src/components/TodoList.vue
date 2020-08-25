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
            <v-toolbar-title>to-do-app <small>(click on list items to edit)</small></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn 
              small 
              outlined
              color="normal"
              @click="listState='all'"
            >All</v-btn>
            <v-spacer></v-spacer>
            <v-btn 
              small 
              outlined
              color="normal"
              @click="listState='pending'"
            >Pending</v-btn>
            <v-spacer></v-spacer>
            <v-btn 
              small 
              outlined
              color="normal"
              @click="listState='complete'"
            >Complete</v-btn>

          </v-toolbar>
          
          <div v-if="listState !== 'complete'">
          <v-list>
            <v-text-field
            solo
            placeholder="Enter new item here"
            v-model="newItem"
            @keyup.enter="addItem"
          ></v-text-field>
            <v-list-item
              v-for="item in todoItems.filter(item => !item.complete)"
              :key="item.id"
            >
              <v-list-item-avatar>
                <v-checkbox v-model="item.complete"></v-checkbox>
              </v-list-item-avatar>
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
                @blur="item.editing=false"
                ></v-textarea>
              </v-list-item-content>
              <v-list-item-icon>
                <div class="my-2">
                  <v-btn class="mx-2" fab dark small 
                  color="error"
                  @click="removeItem(item.id)"
                  >
                    <v-icon dark>mdi-delete</v-icon>
                  </v-btn>
                </div>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
          </div>
          <v-divider v-if="separatorNeeded"></v-divider>
          <v-list v-if="listState !== 'pending'">
            <v-list-item
              v-for="item in todoItems.filter(item => item.complete)"
              :key="item.id"
            >
              <v-list-item-avatar>
                <v-checkbox v-model="item.complete"></v-checkbox>
              </v-list-item-avatar>
              <v-list-item-content>
                <!-- <v-list-item-title 
                style="text-decoration: line-through"
                v-text="item.text"></v-list-item-title>
                <p>{{ item.editing }}</p> -->
                <v-textarea
                :style="item.editing ? '' : 'text-decoration: line-through'"
                :value="item.text"
                :shaped="item.editing"
                :filled="item.editing"
                auto-grow
                rows="1"
                :outlined="item.editing"
                @click="focusItem(item)"
                @input="setText(item, $event)"
                @blur="item.editing = false"
                ></v-textarea>
              </v-list-item-content>
              <v-list-item-icon>
                <div class="my-2">
                  <v-btn class="mx-2" fab dark small 
                    color="error"
                    @click="removeItem(item.id)"
                  >
                    <v-icon dark>mdi-delete</v-icon>
                  </v-btn>
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
      listState: 'all',
      newItem: '',
      id: 4,
      todoItems: [
        { id: 0, editing: false, complete: false, text: 'item 1' },
        { id: 1, editing: false, complete: false, text: 'item 2' },
        { id: 2, editing: false, complete: true, text: 'item 3', },
        { id: 3, editing: false, complete: true, text: 'item 4' },
      ],
    }),
    computed: {
      separatorNeeded() {
        const len = this.todoItems.filter(item => item.complete).length;
        return !(this.todoItems.length === len || len === 0);
      }
    },
    methods: {
      addItem() {
        if (this.newItem.trim()) {
          this.todoItems.push({ id: this.id++, complete: false, text: this.newItem });
          this.newItem = '';
        }
      },
      removeItem(id) {
        this.todoItems = this.todoItems.filter(item => item.id !== id)
        console.log(this.todoItems);
      },
      focusItem(item) {
        console.log('focusing...');
        item.editing = true;
      },
      setText(item, event) {
        if (event) {
          item.text = event;
        }
      }
    }
  }
</script>