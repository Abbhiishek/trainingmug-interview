"use client";

import { DataTable } from "@/components/ui/data-table"
import { useSelector } from 'react-redux';
import { RootState } from '@/context/store';
import { savedcolumns } from "./savedcolumns";

const SavedPictureTable = () => {
    const savedPictures = useSelector((state: RootState) => state.picture);

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={savedcolumns} data={savedPictures} />
        </div>
    )
}
export default SavedPictureTable;

