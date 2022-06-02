import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const financeApi = createApi({
    reducerPath: 'finance',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    tagTypes: ['finance'], 
    endpoints: (builder) => ({
      getFinance: builder.query({
        query: () => ``,
        providesTags:['finance']
      }),
      addFinance:builder.mutation({
        query:  ({data}) => ({
            url: 'finance',
            method: 'POST',
            body: {
             data
            },
          }),
          invalidatesTags: ['finance'],
      }),
    //   deleteContacts:builder.mutation({
    //     query: id => ({
    //       url:`contacts/${id}`,
    //       method:'DELETE',
    //     }),
    //     invalidatesTags: ['contact'], 
    //   }),
    }),
  })
  
 export const {useGetFinanceQuery, useAddFinanceMutation} = financeApi;