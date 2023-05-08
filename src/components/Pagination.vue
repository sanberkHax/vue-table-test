<script setup>
const props = defineProps({
  pageSize: Number,
  currentPage: Number,
  length: Number,
  onClick: Function
})
</script>

<template lang="pug">
nav.d-flex.align-items-center.justify-content-center(aria-label='Pagination')
  ul.pagination.pagination-sm.h-100(@click='props.onClick')
    li.page-item
      a.page-link(href='#', :class='{ disabled: currentPage === 1 }') Previous
    li.page-item(v-for='n in props.length', :key='n', :class='{ active: currentPage === n }')
      a.page-link(href='#') {{ n }}
    li.page-item
      a.page-link(href='#', :class='{ disabled: currentPage === props.length }') Next
</template>
