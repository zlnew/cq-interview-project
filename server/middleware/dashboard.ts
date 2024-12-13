import api from '~/api'

export default defineEventHandler(async (event) => {
  const isDashboard = event.path.startsWith('/dashboard')
  if (!isDashboard) {
    return
  }

  const userId = getCookie(event, 'user_id')
  if (!userId) {
    return sendRedirect(event, '/')
  }

  try {
    const { data } = await api.get(`users/${userId}`)

    if (!data) {
      return sendRedirect(event, '/')
    }
  } catch {
    return sendRedirect(event, '/')
  }
})
