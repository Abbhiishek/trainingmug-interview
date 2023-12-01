
import { configureStore } from "@reduxjs/toolkit";
import PictureSlice from "./slices/picture";
import PostSlice from "./slices/post"


export const store = configureStore({
    reducer: {
        picture: PictureSlice,
        post: PostSlice,

    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
