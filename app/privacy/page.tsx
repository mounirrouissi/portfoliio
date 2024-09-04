"use client";
import React, { createContext } from 'react';
import { motion } from 'framer-motion'

export default function Privacy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold text-center mb-4'>Privacy Policy</h1>
        <p className='text-lg text-yellow-700 mb-4'>This is the privacy policy of our website. We are committed to protecting the privacy and security of our users.</p>
        <p className='text-lg text-yellow-700 mb-4'>We do not collect any personal data from our users. Our website is designed to provide information and services without the need for users to disclose personal information.</p>
        <p className='text-lg text-yellow-700 mb-4'>However, if you choose to contact us or subscribe to our newsletter, we may collect your email address and name. This information is used solely for the purpose of responding to your inquiry or sending you newsletters.</p>
        <p className='text-lg text-yellow-700 mb-4'>We do not share your personal information with third parties, and we take all necessary measures to protect your data from unauthorized access.</p>
        <p className='text-lg text-yellow-700 mb-4'>By using our website, you consent to the collection and use of information as outlined in this privacy policy.</p>
      </div>
    </motion.div>
  )
}
