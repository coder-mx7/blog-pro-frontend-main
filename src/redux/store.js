import { configureStore } from "@reduxjs/toolkit";
import { authreducer } from "./slices/authSlices";
import { profilereducer } from "./slices/profileSlices";

const store = configureStore({
    reducer: {
        auth: authreducer,
        profile:profilereducer,
    }
});

export default store;