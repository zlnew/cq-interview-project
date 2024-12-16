<script setup lang="ts">
import useAuthStore from '~/stores/auth'

definePageMeta({
  name: 'dashboard'
})

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
  <div
    v-if="user"
    class="rounded bg-white p-2"
  >
    <ListTree :data="user" />
  </div>
</template>
