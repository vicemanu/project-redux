import { createSlice } from '@reduxjs/toolkit'


const initialState = {
        user: null,
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
        },
        logoutUser: (state) => {
            return {
                ...state,
                user: null,
            }
        },

        AddAddress: (state, action) => {

            if(action.payload.location === '' || action.payload.number === '') {
                alert("Preencha todos os campos")
                return { ...state }
            }

            if(state.user === null) {
                alert("FAÇA UM LOGIN PARA CADASTRAR UM ENDEREÇO")
                return { ...state}
            }

            alert("DADOS ATUALIZADOS!")
            return {
                ...state,
                user: {
                    ...state.user,
                    address: {
                        location: action.payload.location,
                        number: action.payload.number,
                    } 
                    
                }
            }

        },

        deleteAddress: (state) => {
            return{
                ...state,
                user: {
                    ...state.user,
                    address: null,
                }
            }
        }

    }
})/**Você chama dependendo do que deseja, como é um user você chama userSlice, se for fazer de um carrinho de comprar chamaria carroSlice por exemplo */

export const { createUser, logoutUser, AddAddress, deleteAddress } = userSlice.actions
export default userSlice.reducer;