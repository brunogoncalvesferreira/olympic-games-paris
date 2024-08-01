export interface CountriesProps {
  id: string
  name: string
  continent: string
  flag_url: string
  gold_medals: number
  silver_medals: number
  bronze_medals: number
  total_medals: number
  rank: number
  rank_total_medals: number
}

export interface LinksProps {
  first: string
  last: string
  next: string
  prev: null
}

export interface PagesProps {
  last_page: number
}