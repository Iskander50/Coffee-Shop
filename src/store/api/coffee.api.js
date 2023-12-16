import { api } from "./api";


export const coffeeApi = api.injectEndpoints({
   endpoints:builder=>({
getCoffees:builder.query({
   query: () => '/'
}),
   createCoffee:builder.mutation({
      query:coffee => ({
         body:coffee,
url:'/',
method:'POST',
      }),
   }),
}),
}) 

