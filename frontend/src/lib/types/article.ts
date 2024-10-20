export type Article = {
  _id: string,
  title: string,
  authors: string[]
  journal: string
  year: number
  url: string
  isbn?: string
  sections: string
  content: string
  is_approved?: boolean
  approved_at?: Date
  approved_by?: string
  rating_sum: number
  total_ratings?: number
  rating?: number
  quality_check_pass?: boolean
  quality_checked_at?: Date
  quality_checked_by?: string
  is_analused?: boolean;
  analysed_at?: Date
  moderation_comments?: string
  claims?: string[]
}

