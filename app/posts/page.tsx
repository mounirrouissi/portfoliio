import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

export default async function Posts() {
  const posts = await getAllPosts()

  return (
    <section className='pb-20 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='text-3xl font-bold'>All blog posts</h1>

        <ul className='mt-16 flex flex-col gap-8'>
          {posts.map(post => (
            <li key={post.slug}>
              <Link
                href={`/posts/${post.slug}`}
                className='flex flex-col justify-between gap-x-4 gap-y-1 sm:flex-row'
              >
                <div className='max-w-lg'>
                  <p className='text-xl font-semibold'>{post.title}</p>
                  <p className='mt-2 line-clamp-2 text-sm text-muted-foreground'>
                    {post.summary}
                  </p>
                </div>

                {post.publishedAt && (
                  <p className='mt-1 text-sm font-light'>
                    {formatDate(post.publishedAt)}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
