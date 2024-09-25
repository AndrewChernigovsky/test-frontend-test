const state = () => ({
  users: null,
});

const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
};

const actions = {
  async fetchUsers({ commit }) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!response.ok) {
        throw new Error('Ошибка при получении пользователей', error);
      } else {
        const data = await response.json();
        commit('setUsers', data);
      }
    } catch (error) {
      throw new Error('Ошибка при получении пользователей', error)
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
};