import { ChatContext } from '@/contexts/chatContext'
import { useStateIsOnline } from '@/reducer/context/isOnline/isOnline'
import { useContext } from 'react'

export const useRecipientOnlineStatus = () => {
  const { recipient } = useContext(ChatContext)
  const { isOnline } = useStateIsOnline()

  const recipientOnlineStatus = isOnline.find(
    (isUserOnline) => isUserOnline.id === recipient?.id,
  )?.isOnline

  return { recipientOnlineStatus }
}
