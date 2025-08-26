<template>
  <div class="app-card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.app-card {
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, var(--opacity-shadow));
  padding: 16px;
  border-radius: 8px;
  background-color: var(--color-white);
  box-sizing: border-box;
}
</style>
