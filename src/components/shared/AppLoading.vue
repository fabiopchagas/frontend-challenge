<!-- AppLoading.vue -->
<template>
  <div class="app-loading">
    <div class="app-loading__spinner"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.app-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, var(--opacity-overlay));
  z-index: 9999;

  &__spinner {
    width: 48px;
    height: 48px;
    border: 4px solid rgba(255, 255, 255, var(--opacity-border));
    border-top-color: var(--color-primary);
    border-radius: 50%;
    animation: app-loading-spin 1s linear infinite;
  }
}

@keyframes app-loading-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
