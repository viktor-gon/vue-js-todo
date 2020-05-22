import { loadData, updateData } from '@/api-module';
import { TodoItem } from '@/models/todo-item';
import todo100 from '@/data/todo100';

export const todo = {
  state: () => ({ items: [] }),
  mutations: {
    initTodoItems(state, items) {
      state.items = items;
    },
    updateTodoStatus(state, { id, code }) {
      const index = state.items.findIndex(todo => todo.id === id);
      state.items[index].code = code;
    },
    addTodo(state, payload) {
      console.log('Add Todo', payload);
      state.items.push(payload);
    },
  },
  actions: {
    async fetchData({ commit }) {
      const data = await loadData();
      commit(
        'initTodoItems',
        data.map(item => new TodoItem(todo100[item]))
      );
    },
    async updateTodoStatus({ commit }, { id, status }) {
      const updatedStatusCode = await updateData(id, status.code);
      commit('updateTodoStatus', { id, code: updatedStatusCode });
    },
    addTodo({ commit }, payload) {
      commit('addTodo', payload);
    },
  },
};
