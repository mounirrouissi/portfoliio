"use client";
import React, { createContext } from 'react';
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Header() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 100], [1, 0.8])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <motion.header
      className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'
      style={{ opacity: isMounted ? opacity : 1 }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <nav className='container flex max-w-3xl items-center justify-between'>
        <motion.div
          className='flex flex-col items-start'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href='/' className='font-serif text-2xl font-bold text-foreground'>
            MR
          </Link>
          <p className='text-sm text-muted-foreground'>Mounir Rouissi</p>
        </motion.div>

        <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10'>
          <motion.li
            className='transition-colors hover:text-foreground'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href='/posts' className='text-foreground hover:text-primary'>Posts</Link>
          </motion.li>
          <motion.li
            className='transition-colors hover:text-foreground'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href='/projects' className='text-foreground hover:text-primary'>Projects</Link>
          </motion.li>
          <motion.li
            className='transition-colors hover:text-foreground'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href='/contact' className='text-foreground hover:text-primary'>Contact</Link>
          </motion.li>
        </ul>

        <motion.div
          className='flex items-center'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ThemeToggle />
        </motion.div>
      </nav>
    </motion.header>
  )
}
