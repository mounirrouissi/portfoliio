
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface YouTubeVideoProps {
  videoId: string;
  title: string;
  thumbnail: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId, title, thumbnail }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl"
  >
    <div className="relative w-full aspect-video rounded-md overflow-hidden">
      <Image src={thumbnail} alt={`${title} Thumbnail`} layout="fill" objectFit="cover" />
    </div>
    <h3 className="mt-4 text-xl font-bold text-gray-800 line-clamp-2">{title}</h3>
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition duration-300 ease-in-out"
    >
      Watch Video
    </a>
  </motion.div>
);
interface YTProps {
  videos: YouTubeVideoProps[];
}

const YT: React.FC<YTProps> = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <YouTubeVideo key={video.videoId} {...video} />
      ))}
    </div>
  );
};


  
  export default YT;
