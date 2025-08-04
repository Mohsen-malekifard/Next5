import Link from "next/link"

export default function Home() {
  const blogs = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("blogs") || "[]") : []

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">مقالات</h1>
      <Link href="/new" className="text-blue-500 underline">افزودن مقاله جدید</Link>
      <div className="grid grid-cols-1 mt-4 gap-4">
        {blogs.map((blog, i) => (
          <Link href={`/blog/${i}`} key={i} className="p-4 bg-gray-100 rounded shadow">
            <h2 className="font-bold text-xl">{blog.title}</h2>
            <p className="text-gray-600">{blog.content.slice(0, 50)}...</p>
          </Link>
        ))}
      </div>
    </main>
  )
}