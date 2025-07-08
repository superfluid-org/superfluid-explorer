import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

export interface WhoisResponse {
  TOREX: { handle: string; avatarUrl?: string } | null
  ENS: { handle: string; avatarUrl?: string } | null 
  Farcaster: { handle: string; avatarUrl?: string } | null
  AlfaFrens: { handle: string; avatarUrl?: string } | null
  Lens: { handle: string; avatarUrl?: string } | null
  recommendedName: string | null 
  recommendedAvatar: string | null 
}

export const whoisApi = createApi({
  reducerPath: 'whois',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    resolveAddress: builder.query<WhoisResponse | null, string>({
      queryFn: async (address) => {
        try {
          const response = await fetch(
            `https://whois.superfluid.finance/api/resolve/${address}`
          )
          
          if (!response.ok) {
            return { data: null }
          }
          
          const data = await response.json()
          return { data }
        } catch (error) {
          console.error('Whois API error:', error)
          return { data: null }
        }
      }
    })
  })
}) 