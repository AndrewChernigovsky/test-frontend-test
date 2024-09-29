<template>
  <article class="card-user">
    <img
      class="user__image"
      :src="image ? image : imagePlaceholder"
      :alt="description"
      width="70"
      height="70"
    />
    <header>
      <!-- <h3>{{ user.value.name }}</h3> -->
      <p>
        <!-- <span>email:</span><span>{{ user.value.email }}</span> -->
      </p>
      <p>
        <span>phone:</span><span>{{ phone }}</span>
      </p>
    </header>
    <div>
      <p>О себе:</p>
      <p>{{ description }}</p>
    </div>
  </article>
</template>
<script setup>
import { useRoute } from 'vue-router';
import imagePlaceholder from '@/images/placeholder-image.png';
import { useStore } from 'vuex';
import { onMounted, ref, computed } from 'vue';
const route = useRoute();

const store = useStore();

const userId = route.params.id;

const user = computed(() => {
  const filteredUsers = store.getters['usersStore/filteredUsers'];
  // return filteredUsers.find((u) => u.id === parseInt(route.params.id));
});

onMounted(() => {
  user.value = store.getters['usersStore/filteredUsers'];
  // user.value.filter((user) => user.value.id === userId);
});
</script>
<style lang="scss" scoped></style>
