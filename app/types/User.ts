import Article from '@/app/types/Article'

type User = {
  id: number
  url: string
  photo: string | undefined
  cover: string | undefined
  username: string
  first_name: string
  last_name: string
  bio: string | undefined
  article_count: number
  follower_count: number
  date_joined: string | undefined
  last_login: string | undefined
  articles: Article[] | undefined
}

type UserRequiredFields = Omit<
  User,
  | 'id'
  | 'url'
  | 'image'
  | 'article_count'
  | 'follower_count'
  | 'date_joined'
  | 'last_login'
  | 'articles'
>

type UserFilters = {
  username: string
}

export default User
export type { UserFilters, UserRequiredFields }
