import { apiFunction } from '@/api/api'
import { ChatContext } from '@/contexts/chatContext'
import { Message } from '@/model/MessageModel'
import { useDispatchMessages } from '@/reducer/context/messages/messagesContext'
import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { useContext, useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'

export const useChatSocket = () => {
  const { recipient } = useContext(ChatContext)
  const { setMessages, setMessagesArray } = useDispatchMessages()
  const [socket, setSocket] = useState<Socket | null>(null)
  const [chatId, setChatId] = useState<string | null>(null)

  const URL = `${import.meta.env.VITE_APP_BASE_URL}/private-chats`
  const userId = Cookies.get('userId')
  const recipientId = recipient?.id

  const {
    data: privateMessagesData,
    isLoading: privateMessagesLoading,
    error: privateMessagesError,
  } = useQuery<Message[]>({
    queryKey: ['private-messages', recipientId],
    queryFn: () => apiFunction.getPrivateMessage({ id: recipientId }),
    enabled: !!recipientId,
  })

  useEffect(() => {
    if (privateMessagesData) {
      setMessagesArray(privateMessagesData)
    }

    if (!privateMessagesData) {
      setMessagesArray([])
    }
  }, [privateMessagesData])

  useEffect(() => {
    if (userId && recipientId) {
      const sortByFirst = [userId, recipient.id].sort()
      const newChatId = sortByFirst.join('')
      setChatId(newChatId)

      const newSocket = io(URL, {
        query: {
          userId,
          recipientId,
        },
      })

      newSocket.on('connect', () => {
        if (recipientId) {
          newSocket.emit('join private', recipientId)
        }

        newSocket.on('newMessage', (newMessage: Message) => {
          setMessages(newMessage)
        })
      })

      setSocket(newSocket)

      return () => {
        newSocket.disconnect()
      }
    }
  }, [recipient])

  return {
    socket,
    chatId,
    userId,
    privateMessagesLoading,
    privateMessagesError,
  }
}
