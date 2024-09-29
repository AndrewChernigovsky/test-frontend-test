<template>
  <aside class="aside">
    <Search @update:users="usersUpdate" @get:users-value="getSearchTerm" />
    <p>Результаты</p>
    <ul class="user-list">
      <li v-for="user in users" :key="user.id">
        <User :user="user" />
      </li>
    </ul>
    <span v-if="searchTerm.length === 0">начните поиск</span>
    <span v-if="users.length === 0 && searchTerm.length > 0"
      >совпадение не найдено</span
    >
  </aside>
</template>
<script setup>
import { ref } from 'vue';
import User from '@/components/User/User';

const users = ref([]);
const searchTerm = ref([]);

function usersUpdate(updatedUsers) {
  users.value = updatedUsers || [];
}

function getSearchTerm(searchTermValue) {
  searchTerm.value = searchTermValue;
}
</script>
<style lang="scss" scoped>
.aside {
  padding: 27px 20px;
  border-right: 1px solid red;
}

.user-list {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
</style>
