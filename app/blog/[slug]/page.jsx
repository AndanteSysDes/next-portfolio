
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

async function getSingleBlog(context) {
  const { slug } = context.params
  const data = await import(`../../../data/${slug}.md`)
  const singleDocument = matter(data.default)

  return {
    singleDocument: singleDocument
  }
}

export default async function SingleBlog(props) {
  
  const { singleDocument } = await getSingleBlog(props)
  return (
    <>
      <div>
      
      </div>  
      <div>
        <div>
          <h1>{singleDocument.data.title}</h1>
          <p>{singleDocument.data.date}</p>
          <ReactMarkdown>{singleDocument.content}</ReactMarkdown>
        </div>
      </div>
    </>
  )
}

export async function generateStaticParams() {

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
    return{
      blogs: blogs
    }
  }

  const { blogs } = await getAllBlogs()
  const paths = blogs.map((blog) => `/${blog.slug}`)
  return paths
}