'use client'

import React from 'react'
import { motion, SVGMotionProps } from 'framer-motion'

export const ArrowIcon: React.FC<SVGMotionProps<SVGSVGElement>> = (props) => {
  return (
    <motion.svg
      id="OBJECTS"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="20 20 97.31 97.31"
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 1,
      }}
      {...props}
    >
      <defs>
        <style>{`
          .cls-1 { fill: #fff; }
          .cls-2 { fill: #51ce92; }
        `}</style>
      </defs>
      <path
        className="cls-2"
        d="M97.07,68.65c0,15.69-12.72,28.41-28.41,28.41s-28.41-12.72-28.41-28.41,12.72-28.41,28.41-28.41,28.41,12.72,28.41,28.41Z"
      />
      <polygon
        className="cls-1"
        points="70.48 84.81 65.21 70.16 50.57 64.9 78.05 57.33 70.48 84.81"
      />
    </motion.svg>
  )
}
