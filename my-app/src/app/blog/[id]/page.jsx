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
    <div className="p-4">
      <h1 className="text-2xl font-bold">{blog.title}</h1>
      <p className="mt-2">{blog.content}</p>
    </div>
  )
}