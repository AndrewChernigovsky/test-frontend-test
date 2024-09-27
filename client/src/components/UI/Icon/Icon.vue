<template>
  <svg>
    <use :href="`#${icon}`"></use>
  </svg>
</template>
<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
});
</script>
<style lang="scss" scoped></style>
