import PostCard from "@/components/PostCard"
import { Metadata } from "next"
import Link from "next/link"
import { title } from "process"

export type PostType = {
    id: string,
    name: string,
    description: string
    images: { url: string }[]
}

export const metadata:Metadata={
    title:"Products",
    description:"Products page",
    
}

export default async function Posts() {

    const { data }: { data: PostType[] } = await fetch("https://oline-shop-backend.onrender.com/api/products", {
        cache: 'force-cache'
    }).then(res => res.json())


    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Posts -  SSG
                        </h1>
                        <p className="mt-1 text-sm text-gray-500">
                            Barcha postlarni boshqarish
                        </p>
                    </div>

                    <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700">
                        + Yangi post
                    </button>
                </div>



                {/* Posts List */}
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                    <div className="border-b border-gray-200 px-5 py-4">
                        <h2 className="font-semibold text-gray-900">
                            Barcha postlar
                            <span className="ml-2 rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600">
                                {data?.length}
                            </span>
                        </h2>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {data?.map((post: PostType) => (
                            <PostCard key={post?.id} post={post}/>
                        ))}
                    </div>


                </div>
            </div>
        </div>
    )

}