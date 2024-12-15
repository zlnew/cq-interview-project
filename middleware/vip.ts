import useAuthStore from '~/stores/auth'

export default defineNuxtRouteMiddleware((_to, _from) => {
  const authStore = useAuthStore()

  if (Number(authStore.userId) < 5) {
    return navigateTo('/dashboard/not-vip')
  }
})
