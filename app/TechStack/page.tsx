"use client";
import React from 'react';
import { motion } from 'framer-motion'
import Image from 'next/image'

interface TechIconProps {
  icon: string;
  name: string;
}

const TechIcon: React.FC<TechIconProps> = ({ icon, name }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="flex flex-col items-center p-2 bg-white rounded-lg shadow-md transition duration-300 ease-in-out"
  >
    <Image src={icon} alt={`${name} Icon`} width={64} height={64} />
    <span className="mt-2 text-sm font-semibold">{name}</span>
  </motion.div>
)

const techStack: TechIconProps[] = [
  { icon: "/images/stack/java.png", name: "Java" },
  { icon: "/images/stack/spring.png", name: "Spring" },
  { icon: "/images/stack/js.png", name: "JavaScript" },
  { icon: "/images/stack/ng.png", name: "Angular" },
  { icon: "/images/stack/react.png", name: "React" },
];

export default function TechStack() {
  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-6 p-6 bg-dark-100 rounded-lg shadow-lg mt-8">
          {techStack.map((tech, index) => (
            <TechIcon key={index} icon={tech.icon} name={tech.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
