<template>
  <router-link class="user" :to="idNum">
    <img
      class="user__image"
      :src="image ? image : imagePlaceholder"
      :alt="description"
      width="70"
      height="70"
    />
    <div class="user__text">
      <p class="user__name base-text">{{ name }}</p>
      <p class="user__email">{{ email }}</p>
    </div>
  </router-link>
</template>
<script setup>
import imagePlaceholder from '@/images/placeholder-image.png';

const props = defineProps({
  name: String,
  image: String,
  email: String,
  description: String,
  id: Number,
});

const idNum = `/users/${id}`;
</script>
<style lang="scss" scoped>
.user {
  display: flex;
  gap: 10px;

  &__image {
    width: 70px;
    height: 70px;
  }
}
</style>
