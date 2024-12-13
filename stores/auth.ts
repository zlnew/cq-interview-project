import { defineStore } from 'pinia'

const useAuthStore = defineStore('auth', () => {
  const userId = useCookie<string>('user_id')
  const user = ref<User>()

  const saveUserInfo = (userData: User) => {
    userId.value = userData.id.toString()
    user.value = userData
  }

  const logout = () => {
    userId.value = ''
    user.value = undefined
  }

  return {
    userId,
    user,
    saveUserInfo,
    logout
  }
})

export default useAuthStore
