import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Post } from "@/types/Post";
import { toast } from "@/components/ui/use-toast";

export const SavedPostSlice = createSlice({
    initialState: [] as Post[],
    name: "post",
    reducers: {
        addToSavedPost: (state, action: PayloadAction<Post>) => {
            const existingPost = state.find(post => post.id === action.payload.id);
            if (!existingPost) {
                state.push(action.payload);
                localStorage.setItem('savedPosts', JSON.stringify(state));
                toast({
                    title: "post saved",
                    description: "Post saved to your collection",
                })
                return;
            }
            toast({
                title: "post already in collection"
            })
        },
        removefromSavedPost: (state, action: PayloadAction<Post>) => {
            const index = state.findIndex((post) => post.id === action.payload.id);
            if (index !== -1) {
                state.splice(index, 1);
                localStorage.setItem('savedPosts', JSON.stringify(state));
                toast({
                    title: "post removed"
                })
                return;
            }
        },
    }
});


export const { addToSavedPost, removefromSavedPost } = SavedPostSlice.actions;
export default SavedPostSlice.reducer;
