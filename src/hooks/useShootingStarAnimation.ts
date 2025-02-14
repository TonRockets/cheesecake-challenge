export const useShootingStarAnimation = () => {
  return {
    animate: {
      x: [10, 500],
      y: [0, 500],
      opacity: [0, 1, 0],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  }
}
