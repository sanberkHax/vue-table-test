import { describe, it, expect } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { flushPromises, mount } from '@vue/test-utils'
import App from '@/App.vue'
import { MOCK_POSTS } from '@/constants/MOCK_POSTS'

describe('App', () => {
  it('renders first page of table with 10 items', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [createTestingPinia({ stubActions: false })]
      }
    })

    await flushPromises()

    const item10 = MOCK_POSTS[9]
    const item11 = MOCK_POSTS[10]

    expect(wrapper.text()).toContain(item10.title)
    expect(wrapper.text()).not.toContain(item11.title)
  }),
    it('navigates to second page of table', async () => {
      const wrapper = mount(App, {
        global: {
          plugins: [createTestingPinia({ stubActions: false })]
        }
      })

      await flushPromises()

      const item10 = MOCK_POSTS[9]
      const item11 = MOCK_POSTS[10]

      const buttons = wrapper.findAll('a')

      // Click second page
      await buttons[2].trigger('click')

      expect(wrapper.text()).toContain(item11.title)
      expect(wrapper.text()).not.toContain(item10.title)
    })
})
