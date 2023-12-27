import { createSlice,nanoid } from '@reduxjs/toolkit'
import allUsers from "../../data/users.json"


const initialState = {
  value: {
    users: allUsers,
  },
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const user = action.payload;
      const newUserId = nanoid(); 
      user.id = newUserId;
      state.value.users.push(user);      
    },
    deleteUser: (state, action) => {
      const id = action.payload
      state.value.users = state.value.users.filter(user => user.id !== id)
    }
  },
})

export const { addUser, deleteUser } = userSlice.actions

export default userSlice.reducer

