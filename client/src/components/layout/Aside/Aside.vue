<template>
  <aside class="aside">
    <form>
      <Search @update:users="usersUpdate" />
    </form>
    <p>Результаты</p>
    <ul v-if="users.length > 0">
      <li v-for="user in users" :key="user.id">
        <User
          :name="user.name"
          :image="user?.image"
          :email="user.email"
          :description="user.name"
          :id="user.id"
        />
      </li>
    </ul>
    <span v-if="users.length === 0">начните поиск</span>
  </aside>
</template>
<script setup>
import { ref } from 'vue';
import User from '@/components/User/User.vue';

const users = ref([]);

function usersUpdate(updatedUsers) {
  users.value = updatedUsers;
  console.log(users.value, 'Value');
}
</script>
<style lang="scss" scoped>
.aside {
  padding: 27px 20px;
  border-right: 1px solid red;
}
</style>
