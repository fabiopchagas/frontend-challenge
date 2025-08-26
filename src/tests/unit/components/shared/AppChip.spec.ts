import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppChip from '@/components/shared/AppChip.vue'

describe('AppChip', () => {
  it('should render the component with label', () => {
    const wrapper = mount(AppChip, {
      props: {
        label: 'Test Chip',
      },
    })

    expect(wrapper.find('.app-chip').text()).toBe('Test Chip')
  })
})
