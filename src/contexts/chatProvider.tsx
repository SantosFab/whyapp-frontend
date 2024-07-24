import { Recipient, RecipientGroup } from '@/model/RecipientModel'
import { ReactNode, useState } from 'react'
import { ChatContext } from './chatContext'

interface ChatProviderProps {
  children: ReactNode
}

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [recipient, setRecipient] = useState<Recipient | null>(null)
  const [recipientGroup, setRecipientGroup] = useState<RecipientGroup | null>(
    null,
  )

  return (
    <ChatContext.Provider
      value={{
        recipient,
        setRecipient,
        recipientGroup,
        setRecipientGroup,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}
