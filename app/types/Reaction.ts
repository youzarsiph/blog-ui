import User from '@/app/types/User'

type Reaction = {
  id: number
  url: string
  user: User
  article: number
  emoji: Emoji
  created_at: string
  updated_at: string
}

enum Emoji {
  '👍🏻',
  '❤️',
  '🤣',
  '😲',
  '🤔',
  '😡',
}

type ReactionRequiredFields = Omit<
  Reaction,
  'id' | 'url' | 'user' | 'article' | 'created_at' | 'updated_at'
>

type ReactionFilters = {
  user: number
  article: number
}

export default Reaction
export type { Emoji, ReactionFilters, ReactionRequiredFields }
