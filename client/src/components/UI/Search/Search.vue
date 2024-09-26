<template>
  <input
    name="search"
    type="search"
    id="search-users"
    placeholder="Введите Id или имя"
    @input="searchUsers"
  />
</template>
<script setup>
import { ref, computed, onMounted, defineEmits } from 'vue';
import { useStore } from 'vuex';
import { debounce } from 'lodash';

const store = useStore();

const emit = defineEmits();
const props = defineProps({
  keystring: String,
  required: false,
});

const users = ref([]);
const searchTerm = ref('');

const debouncedFetchUsers = debounce(async () => {
  await store.dispatch('usersStore/fetchUsers');
}, 300);

function searchUsers(e) {
  debouncedFetchUsers();
  users.value = store.state.usersStore.users;
  searchTerm.value = e.target.value;
  users.value = store.getters['usersStore/searchById'](searchTerm.value);
  emit('update:users', users.value);
}
</script>
<style lang="scss" scoped></style>
