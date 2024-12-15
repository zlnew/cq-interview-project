<script setup lang="ts">
import useAuthStore from '~/stores/auth'

useServerSeoMeta({
  title: 'Dashboard'
})

const authStore = useAuthStore()
const { userId, user } = storeToRefs(authStore)

onMounted(() => {
  getUser()
})

const getUser = async () => {
  user.value = await $fetch(`/api/auth/${userId.value}`)
}
</script>

<template>
  <div>
    <pre>{{ user }}</pre>
  </div>
</template>
