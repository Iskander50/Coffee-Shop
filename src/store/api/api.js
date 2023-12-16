import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const API_URL ='http://localhost:4300/coffees'


export const api = createApi({
reducerPath:'api', 
// tagTypes:['Coffee'],
baseQuery:fetchBaseQuery({
   baseUrl:API_URL,
}), endpoints:(builder)=>({
   getCoffees:builder.query({
      query: () => '/'
   }),
}),

})


export const {useGetCoffeesQuery} = api
