import { useScroll, useTransform } from 'framer-motion'
import type { ScrollAnimationConfig } from '@/types/animation'

export const useScrollAnimation = ({ start, end }: ScrollAnimationConfig) => {
  const { scrollYProgress } = useScroll()
  return useTransform(scrollYProgress, [start, end], [0, 1])
}
