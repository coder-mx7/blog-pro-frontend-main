import { createSlice } from "@reduxjs/toolkit";

const postsSlises = createSlice({
  name: "post",

  initialState: {
    posts: [],
    post: {},
    postcate: [],
    postcount: null,
    postscategores: [],
    loanding: false,
    isPostCreatedd: false,
    setClearPost:true,
  },
  reducers: {
    postdata(state, action) {
      state.posts = action.payload;
    },
    postcount(state, action) {
      state.postcount = action.payload;
    },
    postcate(state, action) {
      state.postcate = action.payload;
    },
    postid(state, action) {
      state.post = action.payload;
    },
    postcategores(state, action) {
      state.postscategores = action.payload;
    },
    setloading(state) {
      state.loanding = true;
    },
    setIsPostCreatd(state) {
      state.isPostCreatedd = true;
      state.loanding = false;
    },
    clearIsPostCreatd(state) {
      state.isPostCreatedd = false;
    },
  },
});

const postreducer = postsSlises.reducer;
const postaction = postsSlises.actions;

export { postreducer, postaction };
