import api from '~/api'

export default defineEventHandler(async (event) => {
  const isDashboard = event.path.startsWith('/dashboard')
  if (!isDashboard) {
    return
  }

  const abort = () => {
    setCookie(event, 'user_id', '')
    return sendRedirect(event, '/')
  }

  const userId = getCookie(event, 'user_id')
  if (!userId) {
    return abort()
  }

  try {
    const { data } = await api.get(`users/${userId}`)

    if (!data) {
      throw new Error('User not exists')
    }
  } catch {
    return abort()
  }
})
