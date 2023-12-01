
import { configureStore } from "@reduxjs/toolkit";
import PictureSlice from "./slices/picture";
import PostSlice from "./slices/post"


// get the state from local storgae if the session was refreshed
const preloadedState = {
    picture: JSON.parse(typeof window !== 'undefined' && localStorage.getItem('savedPictures') || '[]'),
    post: JSON.parse(typeof window !== 'undefined' && localStorage.getItem('savedPosts') || '[]'),
};

export const store = configureStore({
    reducer: {
        picture: PictureSlice,
        post: PostSlice,

    },
    preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
