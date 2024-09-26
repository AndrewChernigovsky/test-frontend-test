const state = () => ({
  users: null,
});

const getters = {
  searchById: (state) => (id) => {
    console.log(id, 'ID');
    console.log(state.users, 'state.users ');
    return state.users ? state.users.filter(user => user.id === id) : [];
  },
  searchByName: (state) => (name) => {
    return state.users ? state.users.filter(user => user.name.toLowerCase().includes(name.toLowerCase())) : [];
  },
};

const mutations = {
  setUsers(state, users) {
    state.users = users;
  }
};

const actions = {
  async fetchUsers({ commit }) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!response.ok) {
        throw new Error('Ошибка при получении пользователей', error);
      }
      const data = await response.json();
      commit('setUsers', data);
    } catch (error) {
      console.error('Ошибка при получении пользователей:', error);
    } finally {
      console.log('Пользователи загружены')
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