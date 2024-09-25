import { createStore } from 'vuex';
import storeCount from './useDataLinks.js';

export const store = createStore({
  modules: {
    storeCount
  },
});

export default store;