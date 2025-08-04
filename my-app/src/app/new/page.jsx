"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function NewBlog() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const router = useRouter()

  const handleSubmit = () => {
    if (!title || !content) return alert("تمام فیلدها الزامی هستند.")
    const blogs = JSON.parse(localStorage.getItem("blogs") || "[]")
    blogs.push({ title, content })
    localStorage.setItem("blogs", JSON.stringify(blogs))
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-blue-700 text-center">افزودن مقاله جدید</h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="عنوان مقاله"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="متن مقاله"
            value={content}
            onChange={e => setContent(e.target.value)}
            rows={8}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            ذخیره مقاله
          </button>
        </div>
      </div>
    </div>
  )
}