import { ChatContext } from '@/contexts/chatContext'
import { notification } from 'antd'
import Cookies from 'js-cookie'
import { useContext, useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'
import { useGetAllUsersList } from './useGetAllUsersList'

export const useNotificationsSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null)
  const { users } = useGetAllUsersList()
  const { setIsOnline } = useContext(ChatContext)
  const [api] = notification.useNotification()

  const URL = `${import.meta.env.VITE_APP_BASE_URL}/notifications`
  const userId = Cookies.get('userId')

  useEffect(() => {
    if (userId) {
      const newSocket = io(URL)
      setSocket(newSocket)

      newSocket.on('connect', () => {
        if (userId) {
          newSocket.emit('join private room', userId)
        }

        newSocket.on('isOnline', (data) => {
          if (users) {
            const updatedUsers = users.map((user) =>
              user.id === data.onlineUser.userId
                ? { ...user, isOnline: data.isOnline }
                : user,
            )
            setIsOnline(updatedUsers)
          }
        })

        newSocket.on('notification', (data) => {
          console.log(data)
          api.info({
            message: '',
            description:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            placement: 'bottomRight',
          })
        })

        newSocket.on('error', (data) => {
          console.log(data)
        })
      })

      return () => {
        newSocket.disconnect()
      }
    }
  }, [])

  return { socket, userId }
}
