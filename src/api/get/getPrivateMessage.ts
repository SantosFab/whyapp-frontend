import { api } from '@/lib/api'
import { Recipient } from '@/model/RecipientModel'
import Cookies from 'js-cookie'

export default async function getPrivateMessage({ id }: Recipient) {
  try {
    const userId = Cookies.get('userId')
    const token = Cookies.get('token')

    const response = await api.get('/private-chats/messages', {
      params: {
        userId,
        recipientId: id,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response.data.messages || []
  } catch (error) {
    console.error('Algo saiu mal na requisição:', error)
  }
}
