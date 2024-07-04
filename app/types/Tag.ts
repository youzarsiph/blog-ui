import Article from '@/app/types/Article'

type Tag = {
  id: number
  url: string
  name: string
  color: string
  description: string
  article_count: number
  articles: Article[] | undefined
  created_at: string
  updated_at: string
}

type TagRequiredFields = Omit<
  Tag,
  'id' | 'url' | 'article_count' | 'articles' | 'created_at' | 'updated_at'
>

type TagFilters = {
  name: string
  color: string
}

export default Tag
export type { TagFilters, TagRequiredFields }
