<template>
  <form>
    <label for="search-users">Поиск сотрудников</label>
    <input
      type="search"
      id="search-users"
      placeholder="Введите Id или имя"
      @input="searchUsers"
    />
  </form>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
console.log(store, 'store');
const data = ref([]);

function searchUsers() {}

onMounted(async () => {
  data.value = await store.dispatch('usersStore/fetchUsers');
  console.log(data.value, 'DATa');
});
</script>
<style lang=""></style>
