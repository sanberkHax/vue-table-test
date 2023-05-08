import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Pagination from '@/components/Pagination.vue'

describe('Pagination', () => {
  it('renders properly', async () => {
    const wrapper = mount(Pagination, {
      props: {
        pageSize: 10,
        currentPage: 1,
        length: 5,
        onClick: () => {}
      }
    })

    const buttons = wrapper.findAll('a')

    expect(buttons).toHaveLength(7)
  })
})
