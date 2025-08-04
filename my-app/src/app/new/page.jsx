"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function NewBlog() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const router = useRouter()

  const handleSubmit = () => {
    const blogs = JSON.parse(localStorage.getItem("blogs") || "[]")
    blogs.push({ title, content })
    localStorage.setItem("blogs", JSON.stringify(blogs))
    router.push("/")
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">افزودن مقاله جدید</h1>
      <input
        type="text"
        placeholder="عنوان"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <textarea
        placeholder="متن مقاله"
        value={content}
        onChange={e => setContent(e.target.value)}
        className="w-full p-2 mb-2 border rounded h-40"
      />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
        ذخیره
      </button>
    </div>
  )
}