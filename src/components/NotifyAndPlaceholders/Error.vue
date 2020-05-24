<template>
  <h3 class="error-wrapper">
    <slot></slot>
  </h3>
</template>

<style scoped lang="scss">
@import '@/styles/global';

.error-wrapper {
  color: $errorColor;
}
</style>
