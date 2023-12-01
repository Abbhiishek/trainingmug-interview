"use client";


import { DataTable } from "@/components/ui/data-table"
import { useSelector } from 'react-redux';
import { RootState } from '@/context/store';
import { Post } from '@/types/Post';
import { savedcolumns } from "./savedcolumns";


const SavedPostTable = () => {
    const savedPost = useSelector((state: RootState) => state.post);

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={savedcolumns} data={savedPost} />
        </div>
    )
}
export default SavedPostTable;

