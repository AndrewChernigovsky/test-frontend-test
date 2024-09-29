<template>
  <User :user="user" :asideSearch="false" />
</template>
<script setup>
import User from '@/components/User/User';
import { useRoute } from 'vue-router';
import { ref, computed, watch, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const route = useRoute();
const userID = computed(() => Number(route.params.id));

const user = ref({});

console.log(typeof userID, userID, 'USERID');

const loadUser = async () => {
  await store.dispatch('usersStore/fetchUsers');
  user.value = store.getters['usersStore/searchById'](userID.value);
};

onMounted(loadUser);

watch(userID, () => {
  loadUser();
});
</script>

<style lang="scss" scoped></style>
