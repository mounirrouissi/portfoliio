import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'content', 'posts')

type Post = {
  metadata: Metadata
  content: string
}

type Metadata = {
  title?: string
  summary?: string
  image?: string
  author?: string
  publishedAt?: string
  slug: string
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const filePath = path.join(rootDirectory, `${slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
  const { data, content } = matter(fileContent)
  return { metadata: { ...data, slug }, content }
}

export async function getAllPosts(): Promise<Metadata[]> {
  const files = fs.readdirSync(rootDirectory)

  const posts = files
    .map(file => getPostMetadata(file))
    .sort((a, b) => {
      if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
        return 1
      } else {
        return -1
      }
    })

  return posts
}

export function getPostMetadata(filepath: string): Metadata {
  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, filepath)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
  const { data } = matter(fileContent)
  return { ...data, slug }
}
