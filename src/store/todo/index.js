import { getData, putData, postData } from '@/api-module';
import { TodoItem } from '@/models/todo-item';
import todo100 from '@/data/todo100';
import { getSequence } from '@/helpers';

const ErrorsCodes = {
  CANNOT_UPDATE_STATUS: 'CANNOT_UPDATE_STATUS',
};

export const todo = {
  state: () => ({
    items: undefined,
    // object of errors {
    //    234: {code: 'CANNOT_UPDATE_STATUS' },
    //    634: {code: 'CANNOT_UPDATE_STATUS' },
    /// ...}
    errors: {},
  }),
  mutations: {
    initTodoItems(state, items) {
      state.items = items;
    },
    updateTodoStatus(state, { id, code }) {
      const index = state.items.findIndex(todo => todo.id === id);
      state.items[index].code = code;
    },
    addTodoItem(state, payload) {
      state.items.push(payload);
    },
    addTodoError(state, { id, code }) {
      if (code) {
        state.errors = { ...state.errors, [id]: { code } };

        // clear this error in 2 seconds
        setTimeout(() => {
          delete state.errors[id];
          state.errors = { ...state.errors };
        }, 2000);
      }
    },
  },
  actions: {
    async loadTodoItems({ commit }) {
      const data = await getData();
      const items = data ? data.map(item => new TodoItem(item)) : [];
      commit('initTodoItems', items);
    },
    async updateTodoStatus({ commit }, { id, status }) {
      const updatedItem = await putData(id, { code: status.code });

      if (updatedItem) {
        commit('updateTodoStatus', { id, code: updatedItem.code });
      } else {
        commit('addTodoError', { id, code: ErrorsCodes.CANNOT_UPDATE_STATUS });
      }
    },
    async createNewItems({ commit }) {
      // generate random 10 items
      const items = getSequence(0, 100, 10).map(
        item => new TodoItem(todo100[item])
      );

      items.forEach(async element => {
        element.id = await postData(element);
        commit('addTodoItem', element);
      });
    },
    addTodo({ commit }, payload) {
      commit('addTodo', payload);
    },
  },
};
