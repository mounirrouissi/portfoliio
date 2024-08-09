import Link from 'next/link'
import Image from 'next/image'

import { getAllPosts, getPostBySlug } from '@/lib/posts'

import { ArrowLeftIcon } from '@radix-ui/react-icons'
import MDXContent from '@/components/mdx-content'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  const slugs = posts.map(post => ({ slug: post.slug }))

  return slugs
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params
  const { metadata, content } = await getPostBySlug(slug)

  const { title, image, author, publishedAt } = metadata

  return (
    <section className='pb-20 pt-40'>
      <div className='container max-w-3xl'>
        <Link
          href='/posts'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to posts</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <header>
          <h1 className='text-3xl font-bold'>{title}</h1>
          <p className='mt-1 text-sm text-muted-foreground'>
            {author} / {publishedAt}
          </p>
        </header>

        <main className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  )
}
