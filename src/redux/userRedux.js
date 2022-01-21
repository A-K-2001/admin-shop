import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser:null,
        users:[],
        isFetching:false,
        error:false
    },
    reducers: {

        loginStart: (state)=>{
            state.isFetching=true
        },
        loginSuccess:(state,action)=>{
            state.isFetching=false;
            state.currentUser=action.payload;
        },
        loginFailure:(state)=>{
            state.isFetching =false;
            state.error =true;
        },


        // get all user
        getuserStart: (state) => {
            state.isFetching = true;
            state.error = false;

        },
        getuserSuccess: (state, action) => {
            state.isFetching = false;
            state.users = action.payload;
            // console.log(action.payload);
            // console.log(state.products);


        },
        getuserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
     
       
    },
});

export const { loginStart,loginSuccess,loginFailure ,getuserFailure,getuserStart,getuserSuccess} = userSlice.actions;
export default userSlice.reducer;

     