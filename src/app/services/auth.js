import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { auth_base_url,api_key } from '../../firebase/db'


export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: auth_base_url }),
  endpoints: (builder) => ({
    Signup: builder.mutation({
      query: (user) => ({
        url:`accounts:signUp?key=${api_key}`,
        method:"POST",
        body:user
      }),
    }),
    Login: builder.mutation({
        query: (user) => ({
          url:`accounts:signInWithPassword?key=${api_key}`,
          method:"POST",
          body:user
        }),
      })
  }),
})

export const { useSignupMutation ,useLoginMutation } = authApi