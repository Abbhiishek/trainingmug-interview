import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Picture } from "@/types/Picture";
import { toast } from "@/components/ui/use-toast";

export const SavedPictureSlice = createSlice({
    initialState: [] as Picture[],
    name: "savedpicture",
    reducers: {
        addToSavedPictures: (state, action: PayloadAction<Picture>) => {
            const existingPicture = state.find(picture => picture.id === action.payload.id);
            if (!existingPicture) {
                state.push(action.payload);
                if (typeof window !== 'undefined') {
                    localStorage.setItem('savedPictures', JSON.stringify(state));
                }
                toast({
                    title: "Picture saved",
                    description: "Picture saved to your collection",
                })
                return;
            }
            toast({
                title: "Picture already in collection",
            })

        },
        removefromSavedPictures: (state, action: PayloadAction<Picture>) => {
            const index = state.findIndex((picture) => picture.id === action.payload.id);
            if (index !== -1) {
                state.splice(index, 1);
                if (typeof window !== 'undefined') {
                    localStorage.setItem('savedPictures', JSON.stringify(state));
                }
                toast({
                    title: "Picture Removed",
                    description: "Picture removed from your collection",
                })
            }
        }
    }
});


export const {
    addToSavedPictures,
    removefromSavedPictures
} = SavedPictureSlice.actions;

export default SavedPictureSlice.reducer;
