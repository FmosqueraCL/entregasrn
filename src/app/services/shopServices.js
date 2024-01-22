import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../../firebase/db'


export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  tagTypes:["image","location"],
  endpoints: (builder) => ({
    getUserReligions: builder.query({
      query: () => 'religions.json',
      filter: (userID, data) => {
        const religions = Object.values(data);
        const userReligions = religions.filter(religion => religion.creator === userID);
        return userReligions;
      },
    }),    
    getLastReligion: builder.query({
      query: () => 'religions.json',
      transformResponse: (response) => {
        const religions = Object.values(response);
        const lastReligion = religions[religions.length - 1];
        return lastReligion.id;
      },
    }),    
    postReligion: builder.mutation({
      query:(newReligion) => ({
        url: 'religions.json',
        method:"POST",
        body:newReligion,
      })
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
    postUserLocation: builder.mutation({
      query: ({localId,locationFormatted}) => ({
        url:`userLocation/${localId}.json`,
        method:"PUT",
        body:locationFormatted
      }),
      invalidatesTags:["location"]
    }),
    getUserLocation: builder.query({
      query: (localId) => `userLocation/${localId}.json`,
      providesTags:["location"]
    }),
  }),
})

export const {useGetUserReligionsQuery,
              usePostReligionMutation,
              usePostProfileImageMutation,
              useGetProfileImageQuery,
              usePostUserLocationMutation,
              useGetUserLocationQuery
             } = shopApi