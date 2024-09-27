<template>
  <router-link class="logo" to="/">
    <Icon :icon="'logo'" />
  </router-link>
</template>
<script setup></script>
<style lang="scss" scoped>
.logo {
  color: $BASE_RED;
  max-width: 100%;
  display: flex;
}
</style>
