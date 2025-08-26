<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <div class="app-chip">
    {{ label }}
  </div>
</template>

<style lang="scss" scoped>
.app-chip {
  height: 24px;
  padding: 4px 8px;
  opacity: 1;
  border-radius: 8px;
  background-color: var(--color-light-blue);
  color: var(--color-primary);
  font-weight: 500;
  font-style: Medium;
  font-size: var(--font-size-base);
  line-height: 16px;
  letter-spacing: 0%;
}
</style>
