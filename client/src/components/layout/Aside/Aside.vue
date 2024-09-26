<template>
  <aside>
    <form>
      <label for="search-users">Поиск сотрудников</label>
      <Search @update:users="usersUpdate" />
    </form>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name + ' ' + user.id }}
      </li>
    </ul>
  </aside>
</template>
<script setup>
import { ref } from 'vue';

const users = ref([]);

function usersUpdate(updatedUsers) {
  users.value = updatedUsers;
  console.log(users.value, 'Value');
}
</script>
<style lang=""></style>
