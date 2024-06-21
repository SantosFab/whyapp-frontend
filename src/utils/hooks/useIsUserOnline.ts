import { useGetAllUsersList } from './useGetAllUsersList'

export const useIsUserOnline = () => {
  const { users } = useGetAllUsersList()

  const isUserOnline = users?.some((user) => console.log(user))

  return { isUserOnline }
}
