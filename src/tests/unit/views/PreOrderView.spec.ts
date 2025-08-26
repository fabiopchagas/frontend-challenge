import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import PreOrderView from '@/views/PreOrderView.vue'
import { getPreOrderId } from '@/services/pre-order'

vi.mock('@/services/pre-order', () => ({
  getPreOrderId: vi.fn(),
}))

describe('PreOrderView', () => {
  const mockPreOrder = {
    header: {
      number: 12345,
      serial: 67890,
      buyer: 'Test Buyer',
      price: 1000,
      currency: 'USD',
      createdAt: '2024-01-01',
      status: 'Active',
      contact: {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        fax: '123-456-7891',
      },
    },
    supplier: {
      code: 'SUP001',
      name: 'Test Supplier',
      address: 'Supplier Address',
    },
    addresses: [
      {
        code: 'ADD001',
        name: 'Address 1',
        address: 'Address 1 Location',
        label: 'Primary',
      },
    ],
  }

  it('should render pre-order data when loaded', async () => {
    vi.mocked(getPreOrderId).mockResolvedValue(mockPreOrder)

    const wrapper = mount(PreOrderView)

    await new Promise((resolve) => setTimeout(resolve, 0))
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.pre-order-view__header-id-number').text()).toBe('12345')
    expect(wrapper.find('.pre-order-view__header-details-buyer').text()).toBe('Test Buyer')
  })
})
