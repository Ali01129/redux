import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type userData={
    email:string,
    password:string,
}

let initialState:userData={
    email:'',
    password:''
}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,action:PayloadAction<userData>)=>{
            state.email=action.payload.email,
            state.password=action.payload.password
        },
        logout:(state)=>{
            state.email='',
            state.password=''
        }
    }
});

export const {login,logout} = userSlice.actions;
export default userSlice.reducer;