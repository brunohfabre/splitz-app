type UserType = {
  id: string
  name: string
  email: string
}

export type FriendshipType = {
  id: string
  createdAt: string
  friend: UserType
}
