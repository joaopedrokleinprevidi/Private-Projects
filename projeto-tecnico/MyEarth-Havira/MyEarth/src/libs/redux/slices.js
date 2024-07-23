import { createSlice } from "@reduxjs/toolkit"
import { getUsersService } from "../../service/usersService/getUsersService"

const initialUser = await getUsersService()

const initialState = {
    users: initialUser
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => { state.users.unshift(action.payload) }
    }
})

export const { addUser } = userSlice.actions
export const userReducer = userSlice.reducer