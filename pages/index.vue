<script setup lang="ts">
import useAuthStore from '~/stores/auth'

definePageMeta({
  name: 'login',
  middleware: ['guest'],
  layout: 'auth'
})

useServerSeoMeta({
  title: 'Login'
})

const authStore = useAuthStore()

const userId = ref<number>()
const authenticating = ref(false)

const { error } = useInputValidator(userId)

const authenticate = async () => {
  if (!userId.value) {
    return
  }

  authenticating.value = true

  try {
    const user = await $fetch(`/api/auth/${userId.value}`)
    authStore.saveUserInfo(user)
    navigateTo({ name: 'dashboard' })
  } catch (error) {
    const fetchError = error as Error
    console.error(fetchError.message)
  } finally {
    authenticating.value = false
  }
}
</script>

<template>
  <div class="w-full md:max-w-sm">
    <form
      class="flex flex-col gap-4"
      @submit.prevent="authenticate"
    >
      <UInput
        v-model="userId"
        type="number"
        label="User ID"
        placeholder="Enter your user ID"
        required
        :disabled="authenticating"
        :error="error"
      >
        <template #label>{{ `The User ID: ${userId || ''}` }}</template>
      </UInput>

      <button
        type="submit"
        class="flex h-10 items-center justify-center rounded bg-blue-700 text-white transition disabled:opacity-50"
        :disabled="authenticating || !!error"
      >
        Login
      </button>
    </form>
  </div>
</template>
