import { ChatContext } from '@/contexts/chatContext'
import { useContext } from 'react'

export const useRecipientOnlineStatus = () => {
  const { isOnline, recipient } = useContext(ChatContext)

  const recipientOnlineStatus = isOnline.find(
    (isUserOnline) => isUserOnline.id === recipient?.id,
  )?.isOnline

  return { recipientOnlineStatus }
}
