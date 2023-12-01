/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { Post } from "@/types/Post"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { useDispatch } from "react-redux"
import { removefromSavedPost } from "@/context/slices/post"
import { useToast } from "@/components/ui/use-toast"


export const savedcolumns: ColumnDef<Post>[] = [
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
            const { toast } = useToast()
            return (
                <Button
                    variant="destructive"
                    onClick={() => {
                        const postToSave = {
                            userId: row.original.userId,
                            id: row.original.id,
                            title: row.original.title,
                            body: row.original.body
                        };
                        dispatch(removefromSavedPost(postToSave));
                    }}>
                    Remove
                </Button>
            )
        },
    }
]
