"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"
import { Picture } from "@/types/Picture";
const PicturetTable = () => {
    const [posts, setPosts] = useState<Picture[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
                setPosts(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={posts} />
        </div>
    )
}
export default PicturetTable;

