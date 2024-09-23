"use client"
import YT from '@/components/YT';
import React from 'react'

const YTPage = () => {
    const latestVideos = [
      {
        videoId: 'AY8h7EMwF7E&t=253s',
        title: 'Java 21 Top Features',
        thumbnail: '/images/yt/java_21.png',
      },{
        videoId: 'nubDzefJVC0&t=313s',
        title: 'Deploy Fullstack Spring App to AWS',
        thumbnail: '/images/yt/Aws.png',
      },{
        videoId: '46lLmSoUqmI&list=PL5gLEMhZrjvL6G2LNiI31PDy5MS8-oYjJ',
        title: 'Modern design Pattern In Java',
        thumbnail: '/images/yt/boolean.jpg',
      },
      // Add more video objects here
    ];
  
    return (
        <section className='pb-24'>
        <div>
          <h2 className='title mb-12'>Recent Youtube tutorials</h2>
          </div>
        <YT videos={latestVideos} />
      </section>
    )
  };
  
  export default YTPage;
