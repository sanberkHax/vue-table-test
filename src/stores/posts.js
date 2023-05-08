import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref([])
  const keys = ref([])

  const fetchPosts = async () => {
    try {
      const resp = await axios.get('https://jsonplaceholder.typicode.com/posts')
      posts.value = resp.data
      keys.value = Object.keys(posts.value[0])
    } catch (err) {
      console.log(err)
    }
  }

  return { posts, keys, fetchPosts }
})
