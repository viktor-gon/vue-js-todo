import { mutations } from '@/store/todo/mutations';
import { actions } from '@/store/todo/actions';

export const todo = {
  state: () => ({
    items: undefined,
    // object of errors {
    //    234: {code: 'CANNOT_UPDATE_STATUS' },
    //    634: {code: 'CANNOT_UPDATE_STATUS' },
    /// ...}
    errors: {},
  }),
  mutations,
  actions,
};
