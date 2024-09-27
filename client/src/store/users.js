const state = () => ({
  users: [],
  filteredUsers: []
});

const getters = {
  getUsers: (state) => state.users,
  getFilteredUsers: (state) => state.filteredUsers,

  searchById: (state) => (ids) => {
    let newUsers = state.users ? state.users.filter(user => ids.includes(user.id)) : [];
    commit('setFilteredUsers', newUsers);

    return newUsers;
  },
  searchByName: (state) => (names) => {
    let newUsers = state.users ? state.users.filter(user =>
      names.some(name => user.name.toLowerCase().includes(name.toLowerCase()))
    ) : [];
    commit('setFilteredUsers', newUsers);
    return newUsers;
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