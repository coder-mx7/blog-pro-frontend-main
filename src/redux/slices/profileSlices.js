import { createSlice } from "@reduxjs/toolkit";

const profileSlises = createSlice({
  name: "profile",

  initialState: {
    profile: localStorage.getItem("profile")
      ? JSON.parse(localStorage.getItem("profile"))
      : null,
  },
  reducers: {
    profiledata(state, action) {
      state.profile = action.payload;
    },
    profileuploadePhoto(state, action) {
      state.profile.profilePhoto = action.payload;
    },
    profileupdate(state, action) {
      state.profile = action.payload;
    },
  },
});

const profilereducer = profileSlises.reducer;
const profileaction = profileSlises.actions;

export { profilereducer, profileaction };
