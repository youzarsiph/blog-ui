/**
 * Types
 */

import Article, {
  ArticleFilters,
  ArticleRequiredFields,
} from '@/app/types/Article'
import Comment, {
  CommentFilters,
  CommentRequiredFields,
} from '@/app/types/Comment'
import Reaction, {
  Emoji,
  ReactionFilters,
  ReactionRequiredFields,
} from '@/app/types/Reaction'
import Response from '@/app/types/Response'
import Tag, { TagFilters, TagRequiredFields } from '@/app/types/Tag'
import User, { UserFilters, UserRequiredFields } from '@/app/types/User'

type TimeStampOrdering = {
  type: 'ascending' | 'descending'
  ordering: 'created_at' | 'updated_at'
}

export type {
  Article,
  ArticleFilters,
  ArticleRequiredFields,
  Comment,
  CommentFilters,
  CommentRequiredFields,
  Emoji,
  Reaction,
  ReactionFilters,
  ReactionRequiredFields,
  Response,
  Tag,
  TagFilters,
  TagRequiredFields,
  TimeStampOrdering,
  User,
  UserFilters,
  UserRequiredFields,
}
