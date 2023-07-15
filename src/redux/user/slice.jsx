import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    user: {
        user: null,
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        createUser: (state, action) => {

            return {
                ...state,
                user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    address: null,
                }
            }
        }
    }
})/**Você chama dependendo do que deseja, como é um user você chama userSlice, se for fazer de um carrinho de comprar chamaria carroSlice por exemplo */

export const { createUser } = userSlice.actions
export default userSlice.reducer;