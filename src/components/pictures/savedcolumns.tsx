/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Picture } from "@/types/Picture"
import Image from "next/image"
import { useDispatch } from "react-redux"
import { removefromSavedPictures } from "@/context/slices/picture"
import { useToast } from "@/components/ui/use-toast"

export const savedcolumns: ColumnDef<Picture>[] = [
    {
        header: "Sl.no",
        cell: ({ row }) => row.index + 1,
    },
    {
        accessorKey: "albumId",
        header: "albumId",
    },
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "Picture",
        header: "Picture",
        cell: ({ row }) => {

            return (
                <Image
                    src={row.original.thumbnailUrl}
                    width={75}
                    height={75}
                    alt={row.original.title} />
            )
        },
    },
    {
        accessorKey: "title",
        header: "Title"
    },
    {
        header: "Action",
        id: "remove",
        cell: ({ row }) => {
            const dispatch = useDispatch();
            return (
                <Button
                    variant="destructive"
                    onClick={() => {

                        const pictureToSave = {
                            albumId: row.original.albumId,
                            id: row.original.id,
                            title: row.original.title,
                            url: row.original.url,
                            thumbnailUrl: row.original.thumbnailUrl
                        };
                        dispatch(removefromSavedPictures(pictureToSave));
                    }}>
                    Remove
                </Button>
            )
        },
    }
]
