<script setup lang="ts">
import useAuthStore from '~/stores/auth'

definePageMeta({
  middleware: ['guest'],
  layout: 'auth'
})

useServerSeoMeta({
  title: 'Login'
})

const authStore = useAuthStore()

onMounted(() => {
  getUser()
})

const getUser = async () => {
  try {
    const user = await $fetch('/api/auth/1')
    authStore.saveUserInfo(user)
  } catch (error) {
    const fetchError = error as Error
    console.error(fetchError.message)
  }
}
</script>

<template>
  <div>Login</div>
</template>
