<template>
  <header class="header">
    <div class="container header__wrapper">
      <Logo />
      <p>Пользователь</p>
    </div>
  </header>
</template>

<script setup>
import Logo from '@/components/Logo/Logo';
</script>

<style lang="scss" scoped>
.header {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
