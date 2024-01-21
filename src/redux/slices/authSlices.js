import { createSlice } from "@reduxjs/toolkit";

const authSlises = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("infouser")
      ? JSON.parse(localStorage.getItem("infouser"))
      : null,
      registermessage:null,  
  },
  reducers: {
    login(state, action) {
      //عندما ياتي api call ب الرد من السرفر ب الداتا يقوم ب ارسالها الى هنا في action payload
      state.user = action.payload;
    },
    logaut(state) {
      state.user = null
    },
    register(state,action){
      state.registermessage = action.payload;
    },
    setuserphoto(state,action){
      state.user.profilePhoto = action.payload
    },
    setusername(state,action){
      state.user.username = action.payload
    }
  },
});

const authreducer = authSlises.reducer;
const authaction = authSlises.actions;

export { authreducer, authaction };
