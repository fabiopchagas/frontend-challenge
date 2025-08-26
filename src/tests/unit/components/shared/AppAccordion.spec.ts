import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppAccordion from '@/components/shared/AppAccordion.vue'

describe('AppAccordion', () => {
  const factory = (extraProps: Record<string, unknown> = {}) =>
    mount(AppAccordion, {
      props: {
        title: 'My title',
        ...extraProps,
      },
    })

  it('should display the title', () => {
    const wrapper = factory()
    expect(wrapper.get('.app-accordion__title').text()).toBe('My title')
  })
})
