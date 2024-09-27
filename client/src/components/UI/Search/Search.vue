<template>
  <div class="search">
    <label class="search__label" for="search-users">Поиск сотрудников</label>
    <input
      class="search__input"
      name="search"
      type="search"
      id="search-users"
      placeholder="Введите Id или имя"
      @input="searchUsers"
    />
    <ul>
      <li v-for="user in filteredUsers.value" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, watch, defineEmits } from 'vue';
import { useStore } from 'vuex';
import { debounce } from 'lodash';

const emit = defineEmits(['update:users']);
const store = useStore();
const searchTerm = ref('');
const users = ref([]);

function searchUsers(e) {
  searchTerm.value = e.target.value;
  if (users.value.length === 0) {
    (async () => {
      await store.dispatch('usersStore/fetchUsers');
      users.value = store.getters['usersStore/getUsers'];
    })();
  }
}

const filteredUsers = computed(() => {
  const names = searchTerm.value
    .split(',')
    .map((name) => name.trim())
    .filter((name) => name);

  const ids = searchTerm.value
    .split(',')
    .map((id) => parseInt(id.trim(), 10))
    .filter((id) => !isNaN(id));

  if (ids.length >= 1) {
    return store.getters['usersStore/searchById'](ids);
  }
  if (names.length >= 1) {
    return store.getters['usersStore/searchByName'](names);
  }
  if (!searchTerm.value) return [];
});

watch(filteredUsers, (newUsers) => {
  emit('update:users', newUsers);
});
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  gap: 5px;
  align-items: center;

  &__label {
  }

  &__input {
  }
}
</style>
