export const mutations = {
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
  deleteTodoItem(state, { id }) {
    state.items = state.items.filter(item => item.id !== id);
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
};
