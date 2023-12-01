"use client"

import { Post } from "@/types/Post"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { useDispatch } from "react-redux"
import { addToSavedPost } from "@/context/slices/post"
export const columns: ColumnDef<Post>[] = [
    {
        header: "Sl.no",
        cell: ({ row }) => row.index + 1,
    },
    {
        accessorKey: "userId",
        header: "UserId",
    },
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        header: "Action",
        id: "save",
        cell: ({ row }) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const dispatch = useDispatch();
            return (
                <Button onClick={() => {
                    const postToSave = {
                        userId: row.original.userId,
                        id: row.original.id,
                        title: row.original.title,
                        body: row.original.body
                    };
                    dispatch(addToSavedPost(postToSave));
                }}>
                    Save
                </Button>
            )
        },
    }
]
