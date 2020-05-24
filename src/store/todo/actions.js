import { getData, putData, postData, deleteData } from '@/api-module';
import { getSequence } from '@/helpers';
import { TodoItem } from '@/models/todo-item';
import todo100 from '@/data/todo100';

const ErrorsCodes = {
  CANNOT_UPDATE_STATUS: 'CANNOT_UPDATE_STATUS',
  CANNOT_DELETE_ITEM: 'CANNOT_DELETE_ITEM',
};

export const actions = {
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
  async deleteTodoItem({ commit }, { id }) {
    const updatedItem = await deleteData(id);

    if (updatedItem) {
      commit('deleteTodoItem', { id });
    } else {
      commit('addTodoError', { id, code: ErrorsCodes.CANNOT_DELETE_ITEM });
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
};
