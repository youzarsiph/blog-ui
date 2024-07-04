import User from '@/app/types/User'

type Comment = {
  id: number
  url: string
  user: User
  article: number
  content: string
  replies: number[] | Comment[]
  created_at: string
  updated_at: string
}

type CommentRequiredFields = Omit<
  Comment,
  'id' | 'url' | 'user' | 'article' | 'replies' | 'created_at' | 'updated_at'
>

type CommentFilters = {
  user: number
  article: number
}

export default Comment
export type { CommentFilters, CommentRequiredFields }
