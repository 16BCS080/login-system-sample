import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAuth,fetchAutoLoginAuth } from './fetchAuth';

const initialState = {
    status: "idle",
    accessToken: "",
    authState: false
  };
  
export const authAsync = createAsyncThunk(
'auth/fetchAuth',
 (payload) => {
    const response =  fetchAuth(payload);
    // get from fetch:i'm added as dummy
    const accessToken = "1456ytgfcdrtyhbvc2fg2hbc2f.,k2jhyg2vg2hbvf2tyuj2" ;
    //kind of memory storage, local,session,cookie
    localStorage.setItem('accessToken', accessToken )
    // The value we return becomes the `fulfilled` action payload
    return response.data;
}
);

export const authAutoLoginAsync = createAsyncThunk(
'auth/fetchAutoLoginAuth',
 (payload) => {
    const response =  fetchAutoLoginAuth(payload);
    // get from fetch:i'm added as dummy
    const accessToken = "1456ytgfcdrtyhbvc2fg2hbc2f.,k2jhyg2vg2hbvf2tyuj2" ;
    //kind of memory storage, local,session,cookie
    localStorage.setItem('accessToken', accessToken )
    // The value we return becomes the `fulfilled` action payload
    return response.data;
}
);
 
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      logout(state){
        state.status = "idle";
        state.accessToken = "";
        state.authState = false;
      }
      
    },
    extraReducers: (builder) => {
      //r1
      builder
        .addCase(authAsync.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(authAsync.fulfilled, (state, action) => {
          state.status = 'idle';
          state.accessToken = "63646378";//action.payload;
          state.authState  = true;
        })
        .addCase(authAsync.rejected, (state, action) => {
            state.status = 'idle';
            state.accessToken = 'failed';
            state.authState  = false;
          });
      //r2  
        builder
        .addCase(authAutoLoginAsync.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(authAutoLoginAsync.fulfilled, (state, action) => {
          state.status = 'idle';
          state.accessToken = "63646378";//action.payload;
          state.authState  = true;
        })
        .addCase(authAutoLoginAsync.rejected, (state, action) => {
            state.status = 'idle';
            state.accessToken = 'failed';
            state.authState  = false;
          });
    },
  });

export const { logout } = authSlice.actions;
export default authSlice.reducer;