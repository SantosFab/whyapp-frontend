import { configureStore } from '@reduxjs/toolkit'
import contextBackGround from '@/reducer/context/background/backgroundContext'
import contextTheme from '@/reducer/context/theme/themeContext'
import contextSearch from '@/reducer/context/search/searchContext'
import contextMessages from '@/reducer/context/messages/messagesContext'

export const store = configureStore({
  reducer: {
    contextBackGround,
    contextTheme,
    contextSearch,
    contextMessages,
  },
})

export type RootState = ReturnType<typeof store.getState>
