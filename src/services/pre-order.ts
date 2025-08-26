import $api from './$api'
import type { PreOrder } from '@/types/pre-order'
import mockConfig from '@/mocks/mocks-config'
import { preOrder } from '@/mocks/templates/pre-order'

export const getPreOrderId = async (preOrderId: string): Promise<PreOrder> => {
  if (mockConfig.preOrder.preOrderId && import.meta.env.VITE_APP_API_MOCKS === 'true') {
    return preOrder.data as PreOrder
  }

  return (await $api.get(`/orders/${preOrderId}`)).data
}
