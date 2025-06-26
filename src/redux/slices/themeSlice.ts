import { createSlice } from "@reduxjs/toolkit";


let initialState:string='black';

const themeSlice=createSlice({
    name:'theme',
    initialState,
    reducers:{
        changeTheme:(state)=>{
            if(state=="black"){
               return state='white';
            }
            else{
                return state='black'
            }
        }
    }
})

export const {changeTheme}=themeSlice.actions;
export default themeSlice.reducer;