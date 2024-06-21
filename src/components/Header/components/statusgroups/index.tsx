import { useRecipientOnlineStatus } from '@/utils/hooks/useRecipientOnlineStatus'
import React from 'react'

const StatusContact: React.FC = () => {
  const { recipientOnlineStatus } = useRecipientOnlineStatus()

  return (
    <p
      style={{
        fontSize: '.7rem',
        textTransform: 'capitalize',
        color: recipientOnlineStatus
          ? 'var(--t-primary-20)'
          : 'var(--neutral-100)',
        fontWeight: '700',
      }}
    >
      {recipientOnlineStatus ? 'online' : 'offline'}
    </p>
  )
}
export default StatusContact
