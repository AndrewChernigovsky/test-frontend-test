<template>
  <aside>
    <form>
      <Search @update:users="usersUpdate" />
    </form>
    <p>Результаты</p>
    <ul v-if="users.length > 0">
      <li v-for="user in users" :key="user.id">
        {{ user.name + ' ' + user.id }}
      </li>
    </ul>
    <span v-if="users.length === 0">начните поиск</span>
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
