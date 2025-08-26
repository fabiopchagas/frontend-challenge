<!-- AppAccordion.vue -->
<script setup lang="ts">
import { ref, computed } from 'vue'
import { IconChevronUp } from './icons'

interface Props {
  title: string
  modelValue?: boolean
  defaultOpen?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'toggle', value: boolean): void
}>()

const internal = ref(!!props.defaultOpen)

const isControlled = computed(() => props.modelValue !== undefined)

const isExpanded = computed({
  get: () => (isControlled.value ? !!props.modelValue : internal.value),
  set: (v: boolean) => {
    if (isControlled.value) emit('update:modelValue', v)
    else internal.value = v
    emit('toggle', v)
  },
})

const toggle = () => (isExpanded.value = !isExpanded.value)
</script>

<template>
  <div class="app-accordion">
    <button type="button" class="app-accordion__header" @click="toggle" :aria-expanded="isExpanded">
      <span class="app-accordion__icon" :class="{ 'app-accordion__icon--rotated': isExpanded }">
        <IconChevronUp />
      </span>
      <div class="app-accordion__title">{{ title }}</div>
    </button>

    <div v-show="isExpanded" class="app-accordion__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-accordion {
  &__header {
    display: flex;
    align-items: center;
    gap: 12px;
    background: none;
    border: 0;
    padding: 0;
    cursor: pointer;
  }

  &__icon {
    display: inline-flex;
    transition: transform 0.2s ease;

    &--rotated {
      transform: rotate(180deg);
    }
  }

  &__title {
    font-size: var(--font-size-large);
    font-weight: 500;
    line-height: 1.4;
  }

  &__content {
    padding: 16px 0;
    animation: slideDown 0.2s ease-out;
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
