"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Picture } from "@/types/Picture"
import Image from "next/image"
import { useDispatch } from "react-redux"
import { addToSavedPictures } from "@/context/slices/picture"
export const columns: ColumnDef<Picture>[] = [
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
        id: "save",
        cell: ({ row }) => {

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const dispatch = useDispatch();
            return (
                <Button onClick={() => {
                    const pictureToSave = {
                        albumId: row.original.albumId,
                        id: row.original.id,
                        title: row.original.title,
                        url: row.original.url,
                        thumbnailUrl: row.original.thumbnailUrl
                    };
                    dispatch(addToSavedPictures(pictureToSave));
                }}>
                    Save
                </Button>
            )
        },
    }
]
