'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const LocationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => {
  const bounceVariants = {
    initial: {
      scale: 0.2,
      opacity: 0,
    },
    animate: {
      scale: [0.2, 1.4, 1],
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
      },
    },
  }

  return (
    <svg
      id="OBJECTS"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="20 20 97.31 97.31"
      {...props}
    >
      <motion.path
        fill="#9a7fdd"
        d="M97.07,68.65c0,15.69-12.72,28.41-28.41,28.41s-28.41-12.72-28.41-28.41,12.72-28.41,28.41-28.41,28.41,12.72,28.41,28.41Z"
      />
      <motion.path
        fill="#fff"
        variants={bounceVariants}
        initial="initial"
        animate="animate"
        d="M68.65,52.95c-6.96,0-12.61,5.64-12.61,12.61,0,10.78,12.61,18.8,12.61,18.8,0,0,12.61-8.02,12.61-18.8,0-6.96-5.64-12.61-12.61-12.61ZM68.65,71.86c-3.99,0-7.22-3.23-7.22-7.22s3.23-7.22,7.22-7.22,7.22,3.23,7.22,7.22-3.23,7.22-7.22,7.22Z"
      />
    </svg>
  )
}
