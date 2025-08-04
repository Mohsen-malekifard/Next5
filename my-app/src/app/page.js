"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("blogs") || "[]")
    setBlogs(stored)
  }, [])

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">📝 مقالات</h1>
        <div className="flex justify-end mb-4">
          <Link href="/new" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            + افزودن مقاله
          </Link>
        </div>
        <div className="space-y-4">
          {blogs.length === 0 ? (
            <p className="text-gray-500 text-center">هیچ مقاله‌ای وجود ندارد.</p>
          ) : (
            blogs.map((blog, i) => (
              <Link href={`/blog/${i}`} key={i}>
                <div className="p-4 bg-blue-50 border border-blue-100 rounded hover:bg-blue-100 transition">
                  <h2 className="text-xl font-semibold text-blue-900">{blog.title}</h2>
                  <p className="text-gray-600 mt-1 text-sm line-clamp-2">{blog.content}</p>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </main>
  )
}