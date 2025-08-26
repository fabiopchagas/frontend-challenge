import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PreOderDetails from '@/components/pre-order/PreOderDetails.vue'

describe('PreOderDetails', () => {
  const mockPreOrder = {
    code: '12345',
    name: 'Test Order',
    address: 'Test Address',
    contact: {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      fax: '123-456-7891',
    },
  }

  it('should render pre-order details with title', () => {
    const wrapper = mount(PreOderDetails, {
      props: {
        title: 'Order Details',
        preOrder: mockPreOrder,
      },
    })

    expect(wrapper.find('.pre-order-details__title').text()).toBe('Order Details')
    expect(wrapper.find('.pre-order-details__code').text()).toContain('Test Order')
    expect(wrapper.find('.pre-order-details__code').text()).toContain('#12345')
  })

  it('should render pre-order details without title', () => {
    const wrapper = mount(PreOderDetails, {
      props: {
        preOrder: mockPreOrder,
      },
    })

    expect(wrapper.find('.pre-order-details__title').exists()).toBe(false)
    expect(wrapper.find('.pre-order-details__code').text()).toContain('Test Order')
  })
})
