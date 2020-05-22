import loadData from '@/api-module';
import { TodoItem } from '@/models/todo-item';

export const todo = {
  state: () => ({ items: [] }),
  mutations: {
    initTodo(state, items) {
      state.items = items;
    },
    addTodo(state, payload) {
      console.log('Add Todo', payload);
      state.items.push(payload);
    },
  },
  actions: {
    async fetchData({ commit }) {
      const data = await loadData();
      console.log(data);
      commit(
        'initTodo',
        data.map(item => new TodoItem(item))
      );
    },
    addTodo({ commit }, payload) {
      commit('addTodo', payload);
    },
  },
};
