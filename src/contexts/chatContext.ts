import { Recipient, RecipientGroup } from '@/model/RecipientModel'
import { Dispatch, SetStateAction, createContext } from 'react'

export const ChatContext = createContext<{
  recipient: Recipient | null
  setRecipient: Dispatch<SetStateAction<Recipient | null>>
  recipientGroup: RecipientGroup | null
  setRecipientGroup: Dispatch<SetStateAction<RecipientGroup | null>>
}>({
  recipient: null,
  setRecipient: () => {},
  recipientGroup: null,
  setRecipientGroup: () => {},
})
