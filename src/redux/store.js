import { configureStore } from "@reduxjs/toolkit";
import { authreducer } from "./slices/authSlices";
import { profilereducer } from "./slices/profileSlices";
import { postreducer } from "./slices/postsSlices";

const store = configureStore({
    reducer: {
        auth: authreducer,
        profile:profilereducer,
        post:postreducer,
    }
});

export default store;