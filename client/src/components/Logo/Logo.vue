<template>
  <router-link class="logo" to="/">
    <svg>
      <use :href="`#${icon}`"></use>
    </svg>
  </router-link>
</template>
<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
});
</script>
<style lang="scss" scoped>
.logo {
  color: $BASE_RED;
}
</style>
