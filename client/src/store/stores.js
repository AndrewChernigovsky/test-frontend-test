import { createStore } from 'vuex';
import usersStore from './users';

export const store = createStore({
  modules: {
    usersStore
  },
});

export default store;