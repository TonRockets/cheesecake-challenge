import { motion } from 'framer-motion'

export const PromotionalBackground = () => {
  return (
    <motion.svg
      id="OBJECTS"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="197.55 77.58 353.34 763.79"
      width="215"
      height="465"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <defs>
        <clipPath id="clippath">
          <rect
            className="cls-1"
            x="197.55"
            y="77.58"
            width="353.34"
            height="763.79"
            rx="18.07"
            ry="18.07"
          />
        </clipPath>
        <linearGradient
          id="Degradado_sin_nombre_8"
          x1="197.55"
          y1="459.48"
          x2="550.89"
          y2="459.48"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#c7adf7" />
          <stop offset="1" stopColor="#926ad3" />
        </linearGradient>
        <linearGradient
          id="Degradado_sin_nombre_4"
          x1="165.58"
          y1="339.9"
          x2="439.74"
          y2="339.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#c08aff" />
          <stop offset="1" stopColor="#926ad3" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="Degradado_sin_nombre_5"
          x1="3235.53"
          y1="658.74"
          x2="3509.69"
          y2="658.74"
          gradientTransform="translate(3799.14 1216.32) rotate(-180)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#c08aff" />
          <stop offset="1" stopColor="#926ad3" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.g
        className="cls-54"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <g>
          <rect
            className="cls-37"
            x="197.55"
            y="77.58"
            width="353.34"
            height="763.79"
            rx="18.07"
            ry="18.07"
          />
          <g>
            <g className="cls-32">
              <g>
                <motion.path
                  className="cls-20"
                  d="M165.58,627.58c60.22-25.98,31.97-192.56,53.88-230.66,28.64-49.8,60.56-40.56,86.1-77.41,40.96-59.08,20.07-176.01,48.03-211.56,27.11-34.47,86.14-48.86,86.14-55.73H165.58v575.36Z"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
                <motion.path
                  className="cls-19"
                  d="M563.62,269.9c-60.22,25.98-31.97,192.56-53.88,230.66-28.64,49.8-60.56,40.56-86.1,77.41-40.96,59.08-20.07,176.01-48.03,211.56-27.11,34.47-86.14,48.86-86.14,55.73h274.16V269.9Z"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
              </g>
            </g>
          </g>
        </g>
      </motion.g>
      <style>
        {`
          .cls-1, .cls-2 {
            fill: none;
          }
          .cls-19 {
            fill: url(#Degradado_sin_nombre_5);
          }
          .cls-20 {
            fill: url(#Degradado_sin_nombre_4);
          }
          .cls-37 {
            fill: url(#Degradado_sin_nombre_8);
          }
          .cls-54 {
            clip-path: url(#clippath);
          }
          .cls-18 {
            font-size: 11.75px;
          }
        `}
      </style>
    </motion.svg>
  )
}
