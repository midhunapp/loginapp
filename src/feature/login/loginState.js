import { createSlice } from "@reduxjs/toolkit";

export const loginSlice=createSlice({
    name:'login',
    initialState:{
        requesting: false,
        successful: false,
        loginStatus: '',
        userid:null
    },
    reducers:{
        loginRequest:(state,action)=>{
            state.requesting=true;
            state.successful=false;
            state.userid=null;
        },
        loginSuccess:(state,action)=>{
            state.requesting=false;
            state.successful=true;
            state.loginStatus="Logined successfuly";
            state.userid=action.payload;
        },
        loginError:(state)=>{
            state.requesting=false;
            state.successful=false;
            state.loginStatus="Logined failed"
        }
    }
});
export const {loginRequest,loginSuccess,loginError}=loginSlice.actions;
export default loginSlice.reducer;