"use client";
import React, { createContext } from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion'
import authorImage from '@/public/images/authors/mr.jpg'
export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-8 pb-24 md:flex-row md:items-center'>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='mt-2 flex-1 md:mt-0'
      >
        <h1 className='title no-underline text-4xl font-bold mb-4'>Hey, I&apos;m Mounir.</h1>
        <h1 className='title no-underline text-4xl font-bold mb-4'>Hey, I&apos;m Mounir.</h1>
<p className='mt-3 font-light text-muted-foreground text-lg leading-relaxed'>
  I&apos;m a software engineer based in Tunis, Tunisia. I&apos;m
  passionate about learning new technologies and sharing knowledge with
  others.
</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300'
          onClick={() => window.location.href = '/contact'}
        >
          Get in touch
        </motion.button>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='relative'
      >
        <Image
          className='flex-1 rounded-full shadow-lg hover:shadow-xl transition duration-300 grayscale hover:grayscale-0'
          src={authorImage}
          alt='Mounir'
          width={200}
          height={200}
          priority
        />
      </motion.div>
    </section>
  )
}

