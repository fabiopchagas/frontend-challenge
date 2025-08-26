import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppCard from '@/components/shared/AppCard.vue'

describe('AppCard', () => {
  it('should render the card component', () => {
    const wrapper = mount(AppCard)

    expect(wrapper.find('.app-card').exists()).toBe(true)
  })

  it('should render the slot content', () => {
    const wrapper = mount(AppCard, {
      slots: {
        default: '<div data-testid="card-content">Card content</div>',
      },
    })

    expect(wrapper.find('[data-testid="card-content"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="card-content"]').text()).toBe('Card content')
  })

  it('should render multiple elements in the slot', () => {
    const wrapper = mount(AppCard, {
      slots: {
        default: `
          <div data-testid="element-1">Element 1</div>
          <div data-testid="element-2">Element 2</div>
          <div data-testid="element-3">Element 3</div>
        `,
      },
    })

    expect(wrapper.find('[data-testid="element-1"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="element-2"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="element-3"]').exists()).toBe(true)
  })
})
