"use client"
import { PostType } from '@/app/posts/page'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function PostCard({post}:{post:PostType}) {
    const navigate = useRouter()
    return (
        <article
            key={post?.id}
            className="flex flex-col gap-4 p-5 transition hover:bg-gray-50 sm:flex-row sm:items-center"
        >
            {/* Post Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl font-bold text-blue-600">
                <img width={50} src={post?.images[0]?.url} alt="" />
            </div>

            {/* Post Content */}
            <div className="min-w-0 flex-1">


                
                    <h3 onClick={()=>navigate.push(`/posts/${post.id}`)} className="cursor-pointer truncate text-base font-semibold text-gray-900">
                        {post?.name}
                    </h3>
                

                <p className="mt-1 line-clamp-2 text-sm leading-6 text-gray-500">
                    {post?.description}
                </p>


            </div>
        </article>
    )
}
