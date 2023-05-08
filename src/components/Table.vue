<script setup>
import { computed, ref } from 'vue'
import Pagination from './Pagination.vue'

const props = defineProps({
  headers: Array,
  items: Array,
  hasPagination: Boolean
})

const pageSize = ref(10)
const currentPage = ref(1)

const paginationLength = computed(() => Math.ceil(props.items.length / pageSize.value))

const startIndex = computed(() => (currentPage.value - 1) * pageSize.value)

const list = computed(() => {
  return props.hasPagination
    ? props.items.slice(startIndex.value, startIndex.value + pageSize.value)
    : props.items
})

const handlePagination = (e) => {
  const isLastPage = currentPage.value === paginationLength.value
  const isFirstPage = currentPage.value === 1

  const button = e.target.textContent

  if (button === 'Previous' && !isFirstPage) {
    currentPage.value--
  } else if (button === 'Next' && !isLastPage) {
    currentPage.value++
  } else {
    if (Number(button)) {
      currentPage.value = Number(button)
    }
  }
}
</script>

<template lang="pug">
.d-flex.flex-column.justify-content-between.flex-grow-1.gap-md-5
  table.table.flex-grow-1.align-middle
    thead
      tr
        th(v-for='(header, headerIndex) in props.headers', :key='headerIndex', scope='col')
          | {{ header }}
    tbody
      tr(v-for='(item, itemIndex) in list', :key='itemIndex')
        td(v-for='(header, headerIndex) in props.headers', :key='headerIndex')
          | {{ item[header] }}
  pagination(
    v-if='hasPagination',
    :on-click='handlePagination',
    :length='paginationLength',
    :page-size='pageSize',
    :current-page='currentPage'
  )
</template>

<style lang="scss" scoped>
// Give third column a fixed width to prevent layout shifts between pages
tr :nth-child(3) {
  @include media-breakpoint-up(lg) {
    width: 400px;
  }
}
</style>
