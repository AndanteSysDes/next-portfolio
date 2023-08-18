import Link from "next/link"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

async function getAllBlogs() {
  const files = fs.readdirSync(path.join("data"));
  const blogs = files.map((fileName) => {
    const slug = fileName.replace(".md", "")
    const fileData = fs.readFileSync(path.join("data", fileName), "utf-8")
    const { data } = matter(fileData)
    return {
      frontmatter: data,
      slug: slug,
    }
  })

  const orderedBlogs = blogs.sort((a, b) => {
    return b.frontmatter.id - a.frontmatter.id
  })

  return{
    blogs: orderedBlogs
  }
}

export default async function Blog () {
  const { blogs } = await getAllBlogs()
  return (
    <>
      <div>
        <div>
          <h1>Blog</h1>
          <p>A engineer's daily life</p>
            {blogs.map((blog, index) => 
              <div key={index}>
                <div>
                  <h2>{blog.frontmatter.title}</h2>
                  <p>{blog.frontmatter.excerpt}</p>
                  <p>{blog.frontmatter.date}</p>
                  <Link href={`/blog/${blog.slug}`}>Read More</Link>
                </div>
                <div>
                
                </div>
              </div>
            )}
        </div>
      </div>
    </>
  )
}