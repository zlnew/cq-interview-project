import api from '~/api'

export default defineEventHandler(async (event) => {
  const userId = getRouterParam(event, 'user_id')

  const response = await api.get(`users/${userId}`)

  return <User>response.data
})
