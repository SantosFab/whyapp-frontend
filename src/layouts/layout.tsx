import { Aside } from '@/components/Aside'
import { Chat } from '@/components/Chat'
import { ChatContainer } from '@/components/ChatContainer'
import HeaderChat from '@/components/Header'
import { InputBar } from '@/components/InputBar'
import MenuGroup from '@/components/MenuGroup'
import { UploudFile } from '@/components/uploudFile'
import { Welcome } from '@/components/Welcome'
import { ChatBackgroundContext } from '@/contexts/chatBackgroundContext'
import { ChatContext } from '@/contexts/chatContext'
import styles from '@/pages/App/app.module.css'
import { Flex } from 'antd'
import Cookies from 'js-cookie'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AppLayout = () => {
  const token = Cookies.get('token')
  const userId = Cookies.get('userId')
  const navigate = useNavigate()

  if (!token || !userId) {
    navigate('/login')
  }

  const { recipient, recipientGroup } = useContext(ChatContext)
  const { chatBackgroundStyle } = useContext(ChatBackgroundContext)

  const [openModal, setOpenModal] = useState(false)
  const [openMainAside, setOpenMainAside] = useState(true)
  const [showUploud, setShowUploud] = useState(false)
  return (
    <Flex
      className={
        recipient || recipientGroup
          ? styles.app__layout
          : styles.chat__welcomeMessageBackground
      }
    > 
      <Aside />
      <MenuGroup />
      {recipient || recipientGroup ? (
        <Flex vertical flex={1}>
          <Flex vertical style={{ height: 60 }}>
            <HeaderChat openModal={openModal} setOpenModal={setOpenModal} />
          </Flex>
          <Flex
            flex={1}
            vertical
            align="center"
            className={styles.chat__background}
            style={{
              background: `linear-gradient(${chatBackgroundStyle.color1}, ${
                chatBackgroundStyle.color2 || 'transparent'
              })`,
            }}
          >
            <ChatContainer>
              <Chat />
            </ChatContainer>
          </Flex>

          <Flex className={styles.chat__actionsInUserOrGroup}>
            <InputBar />
          </Flex>
        </Flex>
      ) : (
        <Welcome />
      )}
    </Flex>
  )
}
