import Image from 'next/image'
import authorImage from '@/public/images/authors/hamed.png'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 md:flex-row md:items-center'>
      <div className='flex-1'>
        <h1 className='mb-4 text-3xl font-bold'>Hey, I&#39;m Hamed.</h1>
        <p className='text-muted-foreground'>
          I&#39;m a software engineer based in Toronto, Canada. I&#39;m
          passionate about learning new technologies and sharing knowledge with
          others.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-2xl grayscale'
          src={authorImage}
          alt='Hamed Bahram'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
