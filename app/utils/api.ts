/**
 * API utils
 */

import {
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
  Response as TResponse,
  Tag,
  TagFilters,
  TagRequiredFields,
  TimeStampOrdering,
  User,
  UserFilters,
  UserRequiredFields,
} from '@/app/types'

/**
 * Helper functions
 */
const Utils = {
  /**
   * Sends a delete request
   * @param url URL to fetch
   * @param token Authorization token
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  delete: async (
    url: string,
    token: string,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await fetch(url, {
      method: 'DELETE',
      headers: Utils.headers(token),
    })
      .then((response) => Utils.handleResponse(response))
      .then((data) => callback(data))
      .catch((error) => errorCallback(error)),

  /**
   * Sends a get request
   * @param url URL to fetch data from
   * @param token Authorization token
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  get: async (
    url: string,
    token: string,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await fetch(url, {
      method: 'GET',
      headers: Utils.headers(token),
    })
      .then((response) => Utils.handleResponse(response))
      .then((data) => callback(data))
      .catch((error) => errorCallback(error)),

  /**
   * Sends a post request
   * @param url URL to post data to
   * @param token Authorization token
   * @param data Request body
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  post: async (
    url: string,
    token: string,
    data: any,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: Utils.headers(token),
    })
      .then((response) => Utils.handleResponse(response))
      .then((data) => callback(data))
      .catch((error) => errorCallback(error)),

  /**
   * Sends a put request
   * @param url URL to send data to
   * @param token Authorization token
   * @param data Request body
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  put: async (
    url: string,
    token: string,
    data: any,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: Utils.headers(token),
    })
      .then((response) => Utils.handleResponse(response))
      .then((data) => callback(data))
      .catch((error) => errorCallback(error)),

  /**
   * Checks if response is ok to return json data, else throws an Error
   * @param response Response to handle
   * @returns Promise
   */
  handleResponse: (response: Response) =>
    response.ok
      ? response.json()
      : Utils.throwError(response.status, response.statusText),

  /**
   * Get Request headers
   * @param token Authorization token
   * @returns Request headers
   */
  headers: (token: string) => {
    return {
      Accept: 'application/json',
      Authorization: `Token ${token}`,
      'Content-Type': 'application/json',
    }
  },

  /**
   * Throws an error
   * @param code Response status
   * @param text Response statusText
   */
  throwError: (code: number, text: string) => {
    throw new Error(`${code}: ${text}`)
  },

  /**
   * Constructs URL search params
   * @param params URL search parameters
   * @returns string
   */
  toUrlSearchParams: (
    params:
      | ArticleFilters
      | CommentFilters
      | ReactionFilters
      | TagFilters
      | UserFilters
      | { ordering: string }
      | { search: string },
  ) => {
    let p = ''

    Object.entries(params).map((entry) => (p += `${entry[0]}=${entry[1]}&`))

    return p.slice(0, p.length - 1)
  },

  /**
   * Construct URL search params for ordering
   * @param params URL search params for ordering
   * @returns Promise
   */
  toOrderingUrlSearchParams: (params: TimeStampOrdering) =>
    Utils.toUrlSearchParams({
      ordering: (params.type === 'descending' ? '-' : '') + params.ordering,
    }),
}

/**
 * Article operations
 */
const Articles = {
  /**
   * Creates a new article
   * @param article Request body as an Article object
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  create: async (
    article: ArticleRequiredFields,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.post(
      `${process.env.NEXT_PUBLIC_API_URL}/articles`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      article,
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Deletes an article
   * @param id Article ID
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  delete: async (
    id: number,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Get an article
   * @param id Article ID
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  get: async (
    id: number,
    callback: (data: Article) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: Article) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * List articles
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  list: async (
    callback: (data: TResponse<Article>) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/articles?ordering=-created_at`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: TResponse<Article>) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Updates an article
   * @param id Article ID
   * @param article Request body as an article
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  update: async (
    id: number,
    article: ArticleRequiredFields,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.put(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      article,
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Star an Article (ie add to favorites)
   * @param id Article ID
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  star: async (
    id: number,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.post(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}/star`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      {},
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Get comments of an article
   * @param id Article ID
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  comments: async (
    id: number,
    callback: (data: TResponse<Comment>) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}/comments`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: TResponse<Comment>) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Perform Question Answering
   * @param id Article ID
   * @param question Question to extract it's answer from the article
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  qa: async (
    id: number,
    question: string,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.post(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}/qa`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      { question: question },
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * React to an article
   * @param id Article ID
   * @param emoji Reaction emoji
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  react: async (
    id: number,
    emoji: Emoji,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.post(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}/react`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      { emoji: emoji },
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Get article reactions
   * @param id Article ID
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  reactions: async (
    id: number,
    callback: (data: TResponse<Reaction>) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}/reactions`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: TResponse<Reaction>) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Get article recommendations (ie similar articles)
   * @param id Article ID
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  recommendations: async (
    id: number,
    callback: (data: TResponse<Article>) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}/recommendations`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: TResponse<Article>) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Get article summary
   * @param id Article ID
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  summary: async (
    id: number,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.post(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}/summary`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      {},
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Get article tags
   * @param id Article ID
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  tags: async (
    id: number,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}/tags`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Get article translation
   * @param id Article ID
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  translation: async (
    id: number,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.post(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}/translation`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      {},
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Get recommended articles for current user
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  explore: async (
    callback: (data: TResponse<Article>) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/explore`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: TResponse<Article>) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Get articles from users you follow
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  feed: async (
    callback: (data: TResponse<Article>) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/feed`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: TResponse<Article>) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Generate an article
   * @param prompt
   * @param callback
   * @param errorCallback
   * @returns
   */
  generate: async (
    prompt: string,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.post(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/generate`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      { prompt: prompt },
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Get starred articles by current user
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  starred: async (
    callback: (data: TResponse<Article>) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/starred`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: TResponse<Article>) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Search Articles
   * @param query Search term
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  search: async (
    query: string,
    callback: (data: TResponse<Article>) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/articles?${Utils.toUrlSearchParams({ search: query, ordering: '-created_at' })}`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: TResponse<Article>) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Filter Articles
   * @param params URL search params
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  filter: async (
    params: ArticleFilters,
    callback: (data: TResponse<Article>) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/articles?${Utils.toUrlSearchParams(params)}`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: TResponse<Article>) => callback(data),
      (error: Error) => errorCallback(error),
    ),
}

/**
 * Comments operations
 */
const Comments = {
  /**
   * Creates a new comment
   * @param id Article ID
   * @param comment Request body as a Comment object
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  create: async (
    id: number,
    comment: CommentRequiredFields,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.post(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}/comments/`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      comment,
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Deletes a comment
   * @param id Comment ID
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  delete: async (
    id: number,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/comments/${id}`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Get a comment
   * @param id Comment ID
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  get: async (
    id: number,
    callback: (data: Comment) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/comments/${id}`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: Comment) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * List comments
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  list: async (
    callback: (data: TResponse<Comment>) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/comments`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: TResponse<Comment>) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Updates a comment
   * @param id Comment ID
   * @param comment Request body as a comment
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  update: async (
    id: number,
    comment: CommentRequiredFields,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.put(
      `${process.env.NEXT_PUBLIC_API_URL}/comments/${id}`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      comment,
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Reply to a comment
   * @param id Comment ID
   * @param comment Request body as a comment
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  reply: async (
    id: number,
    comment: CommentRequiredFields,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.post(
      `${process.env.NEXT_PUBLIC_API_URL}/comments/${id}/replies/`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      comment,
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Get Comment replies
   * @param id Comment ID
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  replies: async (
    id: number,
    callback: (data: TResponse<Comment>) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/comments/${id}/replies/`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: TResponse<Comment>) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Perform sentiment analysis on comment
   * @param id Comment ID
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  sentimentAnalysis: async (
    id: number,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.post(
      `${process.env.NEXT_PUBLIC_API_URL}/comments/${id}/sentiment-analysis`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      {},
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Get Comment summary
   * @param id Comment ID
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  summary: async (
    id: number,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.post(
      `${process.env.NEXT_PUBLIC_API_URL}/comments/${id}/summary`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      {},
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Get Comment translation
   * @param id Comment ID
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  translation: async (
    id: number,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.post(
      `${process.env.NEXT_PUBLIC_API_URL}/comments/${id}/translation`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      {},
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Search Comments of an Article
   * @param id Article ID
   * @param query Search term
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  search: async (
    id: number,
    query: string,
    callback: (data: TResponse<Comment>) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}/comments/?${Utils.toUrlSearchParams({ search: query })}`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: TResponse<Comment>) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Filter Comments of an Article
   * @param id Article ID
   * @param params URL search params
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  filter: async (
    id: number,
    params: CommentFilters,
    callback: (data: TResponse<Comment>) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}/comments/?${Utils.toUrlSearchParams(params)}`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: TResponse<Comment>) => callback(data),
      (error: Error) => errorCallback(error),
    ),
}

/**
 * Reactions operations
 */
const Reactions = {
  /**
   * Creates a new reaction
   * @param id Article ID
   * @param reaction Request body as a Reaction object
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  create: async (
    id: number,
    reaction: ReactionRequiredFields,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.post(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}/reactions`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      reaction,
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Deletes a reaction
   * @param id Reaction ID
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  delete: async (
    id: number,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/reactions/${id}`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Get a reaction
   * @param id Reaction ID
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  get: async (
    id: number,
    callback: (data: Reaction) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/reactions/${id}`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: Reaction) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * List reactions
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  list: async (
    callback: (data: TResponse<Reaction>) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/reactions`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: TResponse<Reaction>) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Updates a reaction
   * @param id Reaction ID
   * @param reaction Request body as a reaction
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  update: async (
    id: number,
    reaction: ReactionRequiredFields,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.put(
      `${process.env.NEXT_PUBLIC_API_URL}/reactions/${id}`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      reaction,
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Search Reactions of an Article
   * @param id Article ID
   * @param query Search term
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  search: async (
    id: number,
    query: string,
    callback: (data: TResponse<Reaction>) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}/reactions/?${Utils.toUrlSearchParams({ search: query })}`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: TResponse<Reaction>) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Filter Reactions of an Article
   * @param id Article ID
   * @param params URL search params
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  filter: async (
    id: number,
    params: ReactionFilters,
    callback: (data: TResponse<Reaction>) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}/reactions/?${Utils.toUrlSearchParams(params)}`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: TResponse<Reaction>) => callback(data),
      (error: Error) => errorCallback(error),
    ),
}

/**
 * Tags operations
 */
const Tags = {
  /**
   * Creates a new tag
   * @param tag Request body as a Tag object
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  create: async (
    tag: TagRequiredFields,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.post(
      `${process.env.NEXT_PUBLIC_API_URL}/tags`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      tag,
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Deletes an tag
   * @param id Tag ID
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  delete: async (
    id: number,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/tags/${id}`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Get an tag
   * @param id Tag ID
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  get: async (
    id: number,
    callback: (data: Tag) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/tags/${id}`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: Tag) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * List tag
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  list: async (
    callback: (data: TResponse<Tag>) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/tags`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: TResponse<Tag>) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Updates a tag
   * @param id Tag ID
   * @param tag Request body as a tag
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  update: async (
    id: number,
    tag: TagRequiredFields,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.put(
      `${process.env.NEXT_PUBLIC_API_URL}/tags/${id}`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      tag,
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Get Tag articles
   * @param id Tag ID
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  articles: async (
    id: number,
    callback: (data: TResponse<Article>) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/tags/${id}/articles`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: TResponse<Article>) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Search Tags
   * @param query Search term
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  search: async (
    query: string,
    callback: (data: TResponse<Tag>) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/tags?${Utils.toUrlSearchParams({ search: query })}`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: TResponse<Tag>) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Filter Tags
   * @param params URL search params
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  filter: async (
    params: TagFilters,
    callback: (data: TResponse<Tag>) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/tags?${Utils.toUrlSearchParams(params)}`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: TResponse<Tag>) => callback(data),
      (error: Error) => errorCallback(error),
    ),
}

/**
 * Users operations
 */
const Users = {
  /**
   * Creates a new user
   * @param user Request body as a User object
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  create: async (
    user: UserRequiredFields,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.post(
      `${process.env.NEXT_PUBLIC_API_URL}/users`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      user,
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Deletes a user
   * @param id User ID
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  delete: async (
    id: number,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Get a user
   * @param id User ID
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  get: async (
    id: number,
    callback: (data: User) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: User) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * List users
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  list: async (
    callback: (data: TResponse<User>) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: TResponse<User>) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Updates a user
   * @param id User ID
   * @param user Request body as a user
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  update: async (
    id: number,
    user: UserRequiredFields,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.put(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      user,
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Get User articles
   * @param id User ID
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  articles: async (
    id: number,
    callback: (data: TResponse<Article>) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${id}/articles`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: TResponse<Article>) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Follow a user
   * @param id User ID
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  follow: async (
    id: number,
    callback: (data: any) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.post(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${id}/follow`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      {},
      (data: any) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Search Users
   * @param query Search term
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  search: async (
    query: string,
    callback: (data: TResponse<Tag>) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users?${Utils.toUrlSearchParams({ search: query })}`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: TResponse<Tag>) => callback(data),
      (error: Error) => errorCallback(error),
    ),

  /**
   * Filter Users
   * @param params URL search params
   * @param callback onFullFilled callback
   * @param errorCallback onRejected callback
   * @returns Promise
   */
  filter: async (
    params: UserFilters,
    callback: (data: TResponse<Tag>) => void,
    errorCallback: (error: Error) => void,
  ) =>
    await Utils.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users?${Utils.toUrlSearchParams(params)}`,
      `${process.env.NEXT_PUBLIC_TOKEN}`,
      (data: TResponse<Tag>) => callback(data),
      (error: Error) => errorCallback(error),
    ),
}

/**
 * API operations
 */
const API = {
  articles: Articles,
  comments: Comments,
  reactions: Reactions,
  tags: Tags,
  users: Users,
}

export default API
