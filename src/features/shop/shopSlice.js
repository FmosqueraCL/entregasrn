import { createSlice } from '@reduxjs/toolkit'
import allReligions from "../../data/religions.json"
import allCategories from "../../data/categories.json"

const initialState = {
    value:{
        religions: allReligions,
        categories: allCategories,
        religionSelected:{},
        religionsFilteredByCategory:[]
    }
  }

  export const shopSlice = createSlice({
    name:"shop",
    initialState,
    reducers:{
        setReligionsFilteredByCategory: (state,actions) => {
            state.value.religionsFilteredByCategory = state.value.religions.filter(religion => religion.category == actions.payload)
        },
        setReligionSelected: (state,actions) =>{
            state.value.religionSelected = state.value.religions.find(religion => religion.id === actions.payload)
        }
    }
  })

  export const { setReligionsFilteredByCategory,setReligionSelected} = shopSlice.actions

  export default shopSlice.reducer