import { motion } from 'framer-motion'
import type { AccordionProps } from '@/types/animation'
import { ChevronRight } from 'lucide-react'

export const Accordion = ({
  title,
  children,
  isOpen,
  onToggle,
}: AccordionProps) => {
  return (
    <motion.div className="max-w-md">
      <button
        onClick={onToggle}
        className="flex justify-start w-full text-sm md:text-base"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title}`}
        id={`accordion-button-${title}`}
      >
        <p className="text-2xl font-bold font-poppins text-left">
          <span className="inline-block">
            <ChevronRight
              width={20}
              height={20}
              className={`transform transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
              aria-hidden="true"
            />
          </span>
          {title}
        </p>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="overflow-hidden"
        id={`accordion-content-${title}`}
        aria-labelledby={`accordion-button-${title}`}
      >
        <div>{children}</div>
      </motion.div>
    </motion.div>
  )
}
