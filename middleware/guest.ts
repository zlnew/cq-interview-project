import useAuthStore from '~/stores/auth'

export default defineNuxtRouteMiddleware((_to, _from) => {
  const authStore = useAuthStore()

  if (authStore.userId) {
    return navigateTo('/dashboard')
  }
})
