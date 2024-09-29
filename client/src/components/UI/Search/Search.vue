<template>
  <div class="search">
    <p class="search__title">Поиск сотрудников</p>
    <input
      class="search__input"
      name="search"
      type="search"
      id="search-users"
      placeholder="Введите Id или имя"
      @input="searchUsers"
    />
    <button @click="loadMore">Загрузить больше</button>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useStore } from 'vuex';

const emit = defineEmits(['update:users', 'get:users-value']);
const store = useStore();
const searchTerm = ref('');
const users = ref([]);
const currentPage = ref(1);

function searchUsers(e) {
  searchTerm.value = e.target.value;
  if (users.value.length === 0) {
    (async () => {
      await store.dispatch('usersStore/fetchUsers');
      users.value = store.getters['usersStore/getUsers'];
    })();
  }
  emit('get:users-value', searchTerm.value);
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

const loadMore = async () => {
  currentPage.value++;
  await store.dispatch('usersStore/fetchUsers', { page: currentPage.value });
};
onMounted(
  async () =>
    await store.dispatch('usersStore/fetchUsers', { page: currentPage.value })
);
watch(filteredUsers, (newUsers) => {
  emit('update:users', newUsers);
});
</script>

<style lang="scss" scoped>
.search {
  display: grid;
  gap: 5px;
  align-items: center;

  &__input {
    min-height: 49px;
    border: 1px solid $GREY_E9ECEF;
    border-radius: 8px;
    padding: 16px 24px;
    font-size: 14px;
    color: $GREY_76787D;
  }
}
</style>
