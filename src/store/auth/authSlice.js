import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', // authenticated checking
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {
        login: (state) => {
            state.name = 'César Rincón'
        },
        logout: () => {

        },
        checkingCredentials: ( state ) => {
            state.status = 'checking'
        }
    },
})

export const { login, logout, checkingCredentials } = authSlice.actions