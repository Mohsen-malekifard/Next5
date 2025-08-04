"use client"
import { useEffect, useState } from "react"

export default function BlogPage({ params }) {
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    const blogs = JSON.parse(localStorage.getItem("blogs") || "[]")
    setBlog(blogs[params.id])
  }, [params.id])

  if (!blog) return <p className="p-4">در حال بارگذاری...</p>

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">{blog.title}</h1>
        <p className="text-gray-800 leading-relaxed whitespace-pre-line">{blog.content}</p>
      </div>
    </div>
  )
}