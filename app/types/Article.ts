import User from '@/app/types/User'
import Tag from '@/app/types/Tag'

type Article = {
  id: number
  url: string
  user: User
  photo: string | undefined
  title: string
  headline: string
  content: string
  is_pinned: boolean
  tags: number[] | Tag[]
  recommendations: number[] | Article[]
  stars: number
  comment_count: number
  reaction_count: number
  tag_count: number
  created_at: string
  updated_at: string
}

type ArticleRequiredFields = Omit<
  Article,
  | 'id'
  | 'url'
  | 'user'
  | 'stars'
  | 'recommendations'
  | 'comment_count'
  | 'reaction_count'
  | 'tag_count'
  | 'created_at'
  | 'updated_at'
>

type ArticleFilters = {
  user: number
  is_pinned: boolean
  tags: number[]
}

export default Article
export type { ArticleFilters, ArticleRequiredFields }
