<template>
  <h3 class="status-wrapper">
    <slot></slot>
  </h3>
</template>

<style lang="scss">
@import '@/styles/global';

.status-wrapper {
  color: $statusColor;
}
</style>
