// AppLoading.spec.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppLoading from '@/components/shared/AppLoading.vue'

describe('AppLoading', () => {
  it('should render the loading component', () => {
    const wrapper = mount(AppLoading)

    expect(wrapper.find('.app-loading').exists()).toBe(true)
  })

  it('should have the correct DOM structure', () => {
    const wrapper = mount(AppLoading)

    const loadingElement = wrapper.find('.app-loading')
    const spinnerElement = wrapper.find('.app-loading__spinner')

    expect(loadingElement.exists()).toBe(true)
    expect(spinnerElement.exists()).toBe(true)
    expect(loadingElement.element.tagName).toBe('DIV')
    expect(spinnerElement.element.tagName).toBe('DIV')
  })

  it('should have the correct CSS classes', () => {
    const wrapper = mount(AppLoading)

    expect(wrapper.find('.app-loading').exists()).toBe(true)
    expect(wrapper.find('.app-loading__spinner').exists()).toBe(true)
  })
})
