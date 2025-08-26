<script setup lang="ts">
import type { PreOrderDetails } from '@/types/pre-order'
import { AppCard, AppChip } from '@/components/shared'
import {
  IconLightAddressCard,
  IconLightLocationCheck,
  IconLightUser,
  IconLightEnvelope,
  IconLightPhone,
  IconLightFax,
  IconShowLight,
} from '@/components/shared/icons'

defineProps<{
  title?: string
  preOrder: PreOrderDetails
}>()
</script>

<template>
  <div class="pre-order-details">
    <AppCard>
      <div>
        <div v-if="title" class="pre-order-details__title">{{ title }}</div>
        <div class="pre-order-details__code">
          {{ preOrder?.name }}
          <AppChip v-if="preOrder?.code" :label="`#${preOrder.code}`" />
        </div>
        <div class="pre-order-details__card">
          <div class="pre-order-details__card-item">
            <div v-if="preOrder?.document" class="pre-order-details__item">
              <IconLightAddressCard /> {{ preOrder?.document?.type }}
              {{ preOrder?.document?.value }}
            </div>
            <div class="pre-order-details__item">
              <IconLightLocationCheck /> {{ preOrder?.address }}
            </div>
            <div class="pre-order-details__item">
              <IconLightUser /> {{ preOrder?.contact?.name }}
            </div>
          </div>
          <div class="pre-order-details__card-item">
            <div class="pre-order-details__item">
              <IconLightEnvelope /> {{ preOrder?.contact?.email }}
            </div>
            <div class="pre-order-details__item">
              <IconLightPhone /> {{ preOrder?.contact?.phone }}
            </div>
            <div class="pre-order-details__item"><IconLightFax /> {{ preOrder?.contact?.fax }}</div>
            <div v-if="preOrder?.lastReplyAt" class="pre-order-details__item">
              <IconShowLight /> {{ preOrder?.lastReplyAt }}
            </div>
          </div>
        </div>
      </div>
    </AppCard>
  </div>
</template>

<style lang="scss" scoped>
.pre-order-details {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__title {
    padding-bottom: 4px;
  }

  &__code {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    font-size: var(--font-size-medium);
    line-height: 16px;
    margin-bottom: 12px;
  }

  &__card-item {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 6px;

    :deep(svg) {
      width: 16px;
      height: 16px;
      flex: 0 0 16px;
    }
  }

  &__card {
    display: flex;
    flex-direction: column;

    > div {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
  }
}

@media (min-width: 1024px) {
  .pre-order-details {
    &__card {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      column-gap: 16px;

      > div {
        flex: 1 1 0;
      }
    }

    &__code {
      margin-bottom: 16px;
    }
  }
}
</style>
