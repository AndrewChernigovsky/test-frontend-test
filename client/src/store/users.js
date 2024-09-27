const state = () => ({
  users: [],
  filteredUsers: []
});

const getters = {
  getUsers: (state) => state.users,
  getFilteredUsers: (state) => state.filteredUsers,

  searchById: (state) => (ids) => {
    return state.users ? state.users.filter(user => ids.includes(user.id)) : [];
  },
  searchByName: (state) => (names) => {
    return state.users ? state.users.filter(user =>
      names.some(name => user.name.toLowerCase().includes(name.toLowerCase()))
    ) : [];;
  },
};

const mutations = {
  setUsers(state, filteredUsers) {
    state.filteredUsers = filteredUsers;
  },
  setFilteredUsers(state, users) {
    state.users = users;
  }
};

const actions = {
  async fetchUsers({ commit }) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Ошибка при получении пользователей');
      }
      const data = await response.json();
      commit('setUsers', data);
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