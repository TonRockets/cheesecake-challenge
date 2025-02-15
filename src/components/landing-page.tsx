'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

import { Dialog } from './ui/dialogs'
import { Accordion } from '@/components/ui/accordiont'
import { PromotionalContent } from './ui/card/promotional-content'
import { useScrollAnimation, useShootingStarAnimation } from '@/hooks/index'

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false)
  const [learnMoreClicked, setLearnMoreClicked] = useState<boolean>(false)

  const textContentOpacity = useScrollAnimation({ start: 0, end: 0.1 })
  const firstLayerOpacity = useScrollAnimation({ start: 0.1, end: 0.3 })
  const secondLayerOpacity = useScrollAnimation({ start: 0.3, end: 0.5 })
  const thirdLayerOpacity = useScrollAnimation({ start: 0.5, end: 0.7 })
  const buttonOpacity = useScrollAnimation({ start: 0.7, end: 0.9 })
  const footerOpacity = useScrollAnimation({ start: 0.9, end: 1 })

  const shootingStarAnimation = useShootingStarAnimation()

  const handleLearnMore = () => {
    setLearnMoreClicked(true)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setLearnMoreClicked(false)
  }

  return (
    <div className="min-h-screen bg-background-dark text-white relative overflow-x-hidden md:overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0">
        <div className="w-12 h-0.5 mx-10 mt-12 bg-gradient-to-r from-background-dark to-primary-light rounded drop-shadow-[10px_0_10px_#B49AFF]" />
        <motion.div
          className="w-1 h-1 bg-white rounded-full"
          animate={shootingStarAnimation.animate}
          transition={shootingStarAnimation.transition}
        />
        <div className="md:w-2/3 ml-10 text-4xl font-bold my-8">
          Follow your bus and buy tickets anytime, anywhere without booking fees
          and bureaucracy.
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col md:flex-row mx-auto relative">
        {/* Text content */}
        <motion.div
          className="w-full md:w-1/2 md:h-full flex flex-col order-2 md:order-1"
          style={{ opacity: textContentOpacity }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex-1 md:overflow-y-auto">
            <div className="py-12 md:pl-10">
              <motion.div
                style={{ opacity: firstLayerOpacity }}
                className="md:mx-0 mx-10 mb-8"
              >
                <h1 className="text-2xl font-bold font-poppins" tabIndex={0}>
                  Lorem ipsum
                </h1>
                <p className="font-dmsans" tabIndex={0}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus real-time nunc, sed egestas dictum massa id, feugiat
                  euismod.
                </p>
              </motion.div>

              <motion.div
                style={{ opacity: secondLayerOpacity }}
                className="md:mx-0 mx-10 mb-8"
              >
                <h1 className="text-2xl font-bold font-poppins" tabIndex={0}>
                  Lorem ipsum dolor sit
                </h1>
                <p className="font-dmsans" tabIndex={0}>
                  Nulla lorem tincidunt. Pulvinar et sapien sit amet blandit
                  odio lectus euismod quam ut justo. Integer ornare.
                </p>
              </motion.div>

              <motion.div
                style={{ opacity: thirdLayerOpacity }}
                className="md:mx-0 mx-10 mb-20"
              >
                <Accordion
                  title="Lorem ipsum dolor sit amet"
                  isOpen={isAccordionOpen}
                  onToggle={() => setIsAccordionOpen(!isAccordionOpen)}
                  aria-expanded={isAccordionOpen}
                  aria-controls="accordion-content"
                >
                  <p className="pb-4 font-dmsans" tabIndex={0}>
                    Nulla lorem tincidunt. Pulvinar et sapien sit amet blandit
                    odio lectus euismod quam ut justo. Integer ornare.
                  </p>
                </Accordion>
              </motion.div>

              {/* Botão Learn More no final do conteúdo */}
              <motion.div
                style={{ opacity: buttonOpacity }}
                className="md:mx-0 mx-10 pb-8"
              >
                <motion.button
                  role="button"
                  aria-label="Learn More"
                  onClick={handleLearnMore}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  className={`text-white px-8 py-3 rounded-lg ${
                    learnMoreClicked
                      ? 'bg-secondary-dark'
                      : 'bg-secondary-light hover:bg-secondary'
                  } transition-all duration-150`}
                  aria-expanded={isModalOpen}
                  aria-controls="learn-more-modal"
                >
                  LEARN MORE
                </motion.button>
              </motion.div>

              {/* Dialog */}
              <Dialog
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                title="Learn More About Our Features"
                theme="secondary"
                content={
                  <div>
                    <h2 className="text-lg font-semibold text-blue-600">
                      Bibi Bus Tracking & Ticketing
                    </h2>
                    <p className="text-gray-700 mt-2">
                      Our project is designed to revolutionize public
                      transportation by providing
                      <strong>real-time bus tracking</strong> and seamless{' '}
                      <strong>online ticket purchasing</strong>.
                    </p>
                    <p className="text-gray-700 mt-2">
                      With our platform, users can locate buses on any route,
                      check estimated arrival times, and plan their trips more
                      efficiently. Additionally, they can purchase tickets
                      online, eliminating the need for cash transactions or
                      waiting in line.
                    </p>
                    <p className="text-gray-700 mt-2">
                      Our goal is to enhance the commuting experience by making
                      it more
                      <strong>convenient, reliable, and accessible</strong> for
                      everyone.
                    </p>
                  </div>
                }
                aria-labelledby="learn-more-modal"
              />
            </div>
          </div>
        </motion.div>

        {/* Promotional content */}
        <PromotionalContent />
      </div>

      {/* Footer */}
      <motion.div
        className="flex-shrink-0 flex justify-end items-start"
        style={{ opacity: footerOpacity }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-1/6 h-0.5 mr-10 mb-12 bg-gradient-to-r from-background-dark to-primary-light rounded drop-shadow-[20px_0_10px_#7989DF]" />
      </motion.div>
    </div>
  )
}
