<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { PreOderDetails } from '@/components'
import { AppAccordion, AppLoading } from '@/components/shared'
import {
  IconLightEnvelope,
  IconLightFax,
  IconLightPhone,
  IconInfoTip,
} from '@/components/shared/icons'
import { getPreOrderId } from '@/services/pre-order'
import type { PreOrder } from '@/types/pre-order'
import IconLightUser from '@/components/shared/icons/IconLightUser.vue'

const PRE_ORDER_ID = '1'

const preOrder = ref<PreOrder | null>(null)
const addressesOpen = ref(true)
const isLoading = ref(false)

onMounted(async () => {
  isLoading.value = true
  await getPreOrderId(PRE_ORDER_ID)
    .then((res) => {
      preOrder.value = res
    })
    .finally(() => {
      isLoading.value = false
    })
})
</script>

<template>
  <div class="pre-order-view">
    <AppLoading v-if="isLoading" />
    <template v-if="preOrder">
      <div class="pre-order-view__header">
        <div class="pre-order-view__header-id">
          <div class="pre-order-view__header-id-label">Pre-Order</div>
          <div class="pre-order-view__header-id-number">{{ preOrder?.header.number }}</div>
          <div class="pre-order-view__header-id-serial">#ME{{ preOrder?.header.serial }}</div>
        </div>
        <div class="pre-order-view__header-details">
          <div>
            <div class="pre-order-view__header-details-buyer">{{ preOrder?.header.buyer }}</div>
            <div class="pre-order-view__header-details-items">
              <div class="pre-order-view__header-details-item">
                <IconLightUser />
                {{ preOrder?.header.contact.name }}
              </div>
            </div>
            <div class="pre-order-view__header-details-item">
              <IconLightEnvelope />
              {{ preOrder?.header.contact.email }}
            </div>
            <div class="pre-order-view__header-details-item">
              <IconLightPhone />
              {{ preOrder?.header.contact.phone }}
            </div>
            <div class="pre-order-view__header-details-item">
              <IconLightFax />
              {{ preOrder?.header.contact.fax }}
            </div>
          </div>
          <div>
            <div class="pre-order-view__header-details-price">
              {{ preOrder?.header.currency }} {{ preOrder?.header.price }}
            </div>
            <div class="pre-order-view__header-details-status">{{ preOrder?.header.status }}</div>
            <div class="pre-order-view__header-details-info">
              Created at: {{ preOrder?.header.createdAt }} <IconInfoTip />
            </div>
          </div>
        </div>
      </div>
      <div class="pre-order-view__supplier">
        <PreOderDetails v-if="preOrder?.supplier" title="Supplier" :pre-order="preOrder.supplier" />
      </div>
      <AppAccordion v-model="addressesOpen" title="Addresses">
        <div class="pre-order-view__addresses">
          <PreOderDetails
            v-for="(address, index) in preOrder?.addresses"
            class="pre-order-view__address"
            :key="index"
            :title="address?.label"
            :pre-order="address"
          />
        </div>
      </AppAccordion>
    </template>
    <template v-else>
      <div class="pre-order-view__error">Não foi possível carregar os dados.</div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.pre-order-view {
  display: flex;
  flex-direction: column;
  max-width: 1360px;
  margin: 0 auto;
  padding: 24px;
  box-sizing: border-box;
  gap: 32px;

  &__header {
    display: flex;
    flex-direction: column;
    gap: 24px;

    &-id {
      min-width: 200px;
      background-color: var(--color-primary);
      color: var(--color-white);
      padding: 16px;
      border-radius: 0 8px 8px 0;

      &-label {
        font-weight: 400;
        font-style: Regular;
        font-size: var(--font-size-xl);
        line-height: 24px;
        letter-spacing: 0%;
      }

      &-number {
        font-weight: 700;
        font-style: Bold;
        font-size: var(--font-size-xxxl);
        line-height: 32px;
        letter-spacing: 0%;
      }

      &-serial {
        font-weight: 400;
        font-style: Regular;
        font-size: var(--font-size-base);
        line-height: 16px;
        letter-spacing: 0%;
      }
    }

    &-details {
      display: flex;
      flex-direction: column;
      gap: 16px;
      flex: 1;

      &-buyer {
        font-weight: 600;
        font-style: SemiBold;
        font-size: var(--font-size-xxl);
        line-height: 28px;
        letter-spacing: 0%;
      }

      &-item {
        display: flex;
        align-items: center;
        gap: 2px;
      }

      &-price {
        font-weight: 600;
        font-style: SemiBold;
        font-size: var(--font-size-xxl);
        line-height: 28px;
        letter-spacing: 0%;
      }

      &-status {
        font-weight: 600;
        font-style: SemiBold;
        font-size: var(--font-size-xxl);
        line-height: 28px;
        letter-spacing: 0%;
        color: var(--color-success);
      }

      &-info {
        display: flex;
        align-items: center;
        gap: 2px;
      }
    }
  }

  .pre-order-view__addresses {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .pre-order-view__address {
    max-width: 100%;
  }

  &__error {
    display: flex;
    justify-content: center;
    color: var(--color-error);
    text-align: center;
    font-size: var(--font-size-large);
  }
}

@media only screen and (min-width: 768px) {
  .pre-order-view {
    &__header {
      flex-direction: row;

      &-details {
        flex-direction: row;
        justify-content: space-between;

        &-price {
          text-align: right;
        }

        &-status {
          text-align: right;
        }

        &-info {
          text-align: right;
        }
      }
    }

    .pre-order-view__addresses {
      flex-direction: row;
      width: 100%;
    }

    .pre-order-view__address {
      flex: 1;
      min-width: 0;
    }
  }
}
</style>
