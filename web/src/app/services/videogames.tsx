import { API_URL, STRAPI_URL } from "../config"
import { Game, Pagination, Meta } from "../types/types"
export async function getGames({ page=1  }){
    const games = await fetch(`${API_URL}/videogames?populate[platforms][fields][0]=name&populate[cover][fields][0]=url&pagination[page]=${page}&pagination[pageSize]=1`)
    if(!games.ok){
      throw new Error('Something went worng')
    }
    const { data, meta } : {data: Game[], meta: Meta}= await games.json()
    const { pagination } = meta
    return {data, pagination}
  }

export function getCoverImage({ attributes }: any){
    const { url } = attributes.cover.data.attributes
    return `${STRAPI_URL}${url}`
 }