'use client'
import {Button} from "@/utils/material_tailwind";
import {useEffect, useState} from "react";
export const LoadingSkeleton = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        },30000)
    }, []);
    return (
        <>
            {loading && <figure className="px-20 grid grid-cols-3 animate-pulse">
                <div className="mt-6 w-80 space-y-4">
                    <div color="blue-gray" className="relative bg-gray-400 h-40 rounded-md" />
                    <div className="w-40 h-4 bg-gray-400 rounded-full animate-pulse" />

                    <div className="h-4 bg-gray-400 rounded-full animate-pulse" />
                    <div className="h-4 bg-gray-400 rounded-full animate-pulse" />
                    <div className="h-4 bg-gray-400 rounded-full animate-pulse" />

                    <div className="w-28 h-12 bg-gray-400 rounded-md" />
                </div>
                <div className="mt-6 w-80 space-y-4">
                    <div color="blue-gray" className="relative bg-gray-400 h-40 rounded-md" />
                    <div className="w-40 h-4 bg-gray-400 rounded-full animate-pulse" />

                    <div className="h-4 bg-gray-400 rounded-full animate-pulse" />
                    <div className="h-4 bg-gray-400 rounded-full animate-pulse" />
                    <div className="h-4 bg-gray-400 rounded-full animate-pulse" />

                    <div className="w-28 h-12 bg-gray-400 rounded-md" />
                </div>
                <div className="mt-6 w-80 space-y-4">
                    <div color="blue-gray" className="relative bg-gray-400 h-40 rounded-md" />
                    <div className="w-40 h-4 bg-gray-400 rounded-full animate-pulse" />

                    <div className="h-4 bg-gray-400 rounded-full animate-pulse" />
                    <div className="h-4 bg-gray-400 rounded-full animate-pulse" />
                    <div className="h-4 bg-gray-400 rounded-full animate-pulse" />

                    <div className="w-28 h-12 bg-gray-400 rounded-md" />
                </div>

            </figure>}
        </>
    )
}