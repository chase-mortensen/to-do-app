import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

Vue.use(Vuex);
Vue.use(VueResource);

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
        state.todoItems.push({ id: state.id, editing: false, complete: false, text: state.newItem });
        state.newItem = '';
      }
    },
    focusItem (state, { item }) {
      state.todoItems.filter(todoItem => todoItem.id === item.id)[0].editing = true;      
    },
    loadTodoItems (state, { todoItems }) {
      state.todoItems = todoItems;
    },
    loadId (state, { id }) {
      state.id = ++id;
      console.log('loaded id ', state.id);
    },
    removeItem (state, { id }) {
      state.todoItems = state.todoItems.filter(item => item.id !== id);
    },
    setText (state, { item, event })  {
      if (event) {
        state.todoItems.filter(todoItem => todoItem.id === item.id)[0].text = event;
      }
    },
    updateId (state) {
      state.id++;
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
