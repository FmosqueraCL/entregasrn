import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../../firebase/db'


export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  tagTypes:["image","location","religions","religionId","members"],
  endpoints: (builder) => ({
    getAllReligions: builder.query({
      query: () => 'religions.json',
    }),     
    postReligion: builder.mutation({
      query:(newReligion) => ({
        url: 'religions.json',
        method:"POST",
        body:newReligion,
      })
    }),
    postMember: builder.mutation({
      query: ({id, userId}) => ({
        url: `religions/${id}/members.json`,
        method: "PUT",
        body:  {userId:userId},  
      }),
      invalidatesTags: ["religions"],
    }),    
    getReligionDetails: builder.query({
      query: (id) => `religions/${id}.json`,

    }),     
  
    
    postProfileImage: builder.mutation({
      query: ({localId,image}) => ({
        url:`profileImages/${localId}.json`,
        method:"PUT",
        body:{image}
      }),
      invalidatesTags:["image"]
    }),
    getProfileImage: builder.query({
      query: (localId) => `profileImages/${localId}.json`,
      providesTags:["image"]
    }),
  }),
})

export const {useGetAllReligionsQuery,
              
              usePostReligionMutation,
              useGetReligionDetailsQuery,              
              usePostMemberMutation,  
              usePostProfileImageMutation,
              useGetProfileImageQuery,              
             } = shopApi