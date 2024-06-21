import { api } from '@/lib/api'
import Cookies from 'js-cookie'

export default async function dynamicNotifications() {
  try {
    const token = Cookies.get('token')
    const response = await api.post(
      '/notifications/dynamic-online-users',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    return response
  } catch (error) {
    console.error('Algo saiu mal na requisição:', error)
  }
}
