'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const DoubleArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => {
  const spinVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: [0, 420, 320, 360],
      transition: {
        duration: 2,
        ease: 'easeInOut',
        times: [0, 0.8, 1],
      },
    },
  }

  return (
    <svg
      id="OBJECTS"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 137.31 137.31"
      {...props}
    >
      <circle
        fill="#9a7fdd"
        cx="68.65"
        cy="68.65"
        r="47.13"
        transform="translate(-21.05 31.5) rotate(-22.5)"
      />
      <motion.g variants={spinVariants} initial="initial" animate="animate">
        <g>
          <polyline
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            points="41.82 65.04 53.43 52.31 65.05 65.04"
          />
          <line
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="53.43"
            y1="52.31"
            x2="53.43"
            y2="85"
          />
        </g>
        <g>
          <polyline
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            points="95.49 72.27 83.87 85 72.26 72.27"
          />
          <line
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="83.87"
            y1="85"
            x2="83.87"
            y2="52.31"
          />
        </g>
      </motion.g>
    </svg>
  )
}
