<script setup>
import Table from '@/components/Table.vue'
import { usePostsStore } from '@/stores/posts'

const store = usePostsStore()

store.fetchPosts()
</script>

<template lang="pug">
main.p-sm-3.p-md-5.min-vh-100.d-flex.flex-column
  Table(:headers='store.keys', :items='store.posts', :has-pagination='true')
</template>
