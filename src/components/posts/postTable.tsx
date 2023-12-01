"use client";

import { Post } from "@/types/Post"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"

const PostTable = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPosts(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className="lg:container mx-auto lg:py-10 p-2">
            <DataTable columns={columns} data={posts} />
        </div>
    )
}
export default PostTable;

