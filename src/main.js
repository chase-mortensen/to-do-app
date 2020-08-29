import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    listState: 'all',
    newItem: '',
    id: 4,
    todoItems: [
      { id: 0, editing: false, complete: false, text: 'item 1' },
      { id: 1, editing: false, complete: false, text: 'item 2' },
      { id: 2, editing: false, complete: true, text: 'item 3' },
      { id: 3, editing: false, complete: true, text: 'item 4' },
    ],
  },
  mutations: {
    addItem (state) {
      if (state.newItem.trim()) {
        state.todoItems.push({ id: state.id++, complete: false, text: state.newItem });
        state.newItem = '';
      }
    },
    focusItem (state, { item }) {
      state.todoItems.filter(todoItem => todoItem.id === item.id)[0].editing = true;      
    },
    removeItem (state, { id }) {
      state.todoItems = state.todoItems.filter(item => item.id !== id);
    },
    setText (state, { item, event })  {
      if (event) {
        state.todoItems.filter(todoItem => todoItem.id === item.id)[0].text = event;
      }
    },
    unfocusItem (state, { item }) {
      state.todoItems.filter(todoItem => todoItem.id === item.id)[0].editing = false; 
    },
    updateListState (state, { listState }) {
      state.listState = listState;
    },
    updateNewItem (state, { item }) {
      state.newItem = item;
    }
  }
});

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
