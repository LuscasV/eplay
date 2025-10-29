import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  billing: {
    name: string
    email: string
    document: string
  }
  delivery: {
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
        document: string
      }
      name?: string
      number?: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
    installments: number
  }
}

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => 'https://api-ebac.vercel.app/api/eplay/destaque',
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => 'https://api-ebac.vercel.app/api/eplay/promocoes',
    }),
    getSoon: builder.query<Game[], void>({
      query: () => 'https://api-ebac.vercel.app/api/eplay/em-breve',
    }),
    getActionGames: builder.query<Game[], void>({
      query: () => 'https://api-ebac.vercel.app/api/eplay/acao',
    }),
    getSportGames: builder.query<Game[], void>({
      query: () => 'https://api-ebac.vercel.app/api/eplay/esportes',
    }),
    getSimulationGames: builder.query<Game[], void>({
      query: () => 'https://api-ebac.vercel.app/api/eplay/simulacao',
    }),
    getFightGames: builder.query<Game[], void>({
      query: () => 'https://api-ebac.vercel.app/api/eplay/luta',
    }),
    getRpgGames: builder.query<Game[], void>({
      query: () => 'https://api-ebac.vercel.app/api/eplay/rpg',
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `https://api-ebac.vercel.app/api/eplay/jogos/${id}`,
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'https://api-ebac.vercel.app/api/eplay/checkout',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useGetFeaturedGameQuery,
  useGetSoonQuery,
  useGetOnSaleQuery,
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetGameQuery,
  usePurchaseMutation,
} = api

export default api
