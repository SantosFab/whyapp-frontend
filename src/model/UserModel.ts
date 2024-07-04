export interface User {
  id: string
  nome: string
  email: string
  ativo: boolean
  isOnline: boolean
  senha: string
  avatar: string
  descricao: string
  amigos: string[]
  grupos: string[]
  createdAt: string
  updateAt: string
  opcaoenqueteid: string
}

export interface UserResponse {
  user: User
}
