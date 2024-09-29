const state = () => ({
  users: []
});

const getters = {
  getUsers: (state) => state.users,

  getUsersByID: (state) => (id) => {
    return state.users.find(user => user.id === id) || null;
  },

  searchById: (state) => (ids) => {
    if (Array.isArray(ids)) {
      return state.users ? state.users.filter(user => ids.includes(user.id)) : [];
    } else if (typeof ids === 'number') {
      return state.users.find(user => user.id === ids) || null;
    } else {
      return [];
    }

  },

  searchByName: (state) => (names) => {
    return state.users ? state.users.filter(user =>
      names.some(name => user.name.toLowerCase().includes(name.toLowerCase()))
    ) : [];
  },
};

const mutations = {
  setUsers(state, users) {
    state.users = [state.users, ...users];
  },
  setTotalUsers(state, count) {
    state.totalUsers = count;
  },
  clearUsers(state) {
    state.users = [];
    state.cached = false;
  },
};

const actions = {
  async fetchUsers({ commit }, { page = 1, limit = 5 } = {}) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`);
      if (!response.ok) {
        throw new Error('Ошибка при получении пользователей');
      }
      const data = await response.json();
      console.log(data, 'data');
      commit('setUsers', data);
      state.cached = true;
    } catch (error) {
      console.error('Ошибка при получении пользователей:', error);
    }

  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};