import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

export interface WhoisResponse {
  TOREX: { handle: string; avatarUrl?: string; address: string } | null
  ENS: { handle: string; avatarUrl?: string; address: string } | null 
  Farcaster: { handle: string; avatarUrl?: string; address: string } | null
  AlfaFrens: { handle: string; avatarUrl?: string; address: string } | null
  recommendedName: string | null 
  recommendedAvatar: string | null 
  recommendedService: string | null
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
    }),
    reverseResolveName: builder.query<WhoisResponse | null, string>({
      queryFn: async (name) => {
        try {
          const response = await fetch(
            `https://whois.superfluid.finance/api/reverse-resolve/${name}`
          )
          
          if (!response.ok) {
            return { data: null }
          }
          
          const data = await response.json()
          return { data }
        } catch (error) {
          console.error('Whois API reverse resolve error:', error)
          return { data: null }
        }
      }
    })
  })
}) 