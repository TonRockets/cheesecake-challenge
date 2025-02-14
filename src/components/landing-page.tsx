'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation, useShootingStarAnimation } from '@/hooks/index'
import { Accordion } from '@/components/ui/accordiont'
import { LocationCard, BuyTicketCard } from '@/src/components/ui/card'
import { AppIcon } from './ui/icons'
import { PromotionalContent } from './ui/card/promotional-content'

export default function LandingPage() {
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false)
  const [learnMoreClicked, setLearnMoreClicked] = useState<boolean>(false)

  const textContentOpacity = useScrollAnimation({ start: 0, end: 0.1 })
  const firstLayerOpacity = useScrollAnimation({ start: 0.1, end: 0.3 })
  const secondLayerOpacity = useScrollAnimation({ start: 0.3, end: 0.5 })
  const thirdLayerOpacity = useScrollAnimation({ start: 0.5, end: 0.7 })
  const buttonOpacity = useScrollAnimation({ start: 0.7, end: 0.9 })
  const footerOpacity = useScrollAnimation({ start: 0.9, end: 1 })

  const shootingStarAnimation = useShootingStarAnimation()

  const handleBuyTicket = () => {
    console.log('Buy ticket clicked')
  }

  const handleLearnMore = () => {
    setLearnMoreClicked(true)
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
                <h1 className="text-2xl font-bold font-poppins">Lorem ipsum</h1>
                <p className="font-dmsans">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus real-time nunc, sed egestas dictum massa id, feugiat
                  euismod.
                </p>
              </motion.div>

              <motion.div
                style={{ opacity: secondLayerOpacity }}
                className="md:mx-0 mx-10 mb-8"
              >
                <h1 className="text-2xl font-bold font-poppins">
                  Lorem ipsum dolor sit
                </h1>
                <p className="font-dmsans">
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
                >
                  <p className="pb-4 font-dmsans">
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLearnMore}
                  className={`text-white px-8 py-3 rounded-lg ${
                    learnMoreClicked
                      ? 'bg-secondary-dark'
                      : 'bg-secondary-light hover:bg-secondary'
                  } transition-all duration-150`}
                >
                  LEARN MORE
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Promotional content */}
        <motion.div
          className="w-full md:w-1/2 md:h-full flex flex-col items-center order-1 md:order-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-[300px] h-[465px] flex justify-center items-start mt-12">
            {/* Shooting star */}
            <motion.div
              className="w-1 h-1 bg-white rounded-full"
              animate={shootingStarAnimation.animate}
              transition={shootingStarAnimation.transition}
            />

            {/* App background */}
            <PromotionalContent />

            {/* App icon */}
            <div className="absolute top-[5%] flex flex-col items-center gap-1">
              <AppIcon />
              <div className="text-2xl font-bold">App</div>
            </div>

            {/* Location card */}
            <div className="absolute top-[32%] left-0 flex justify-center items-center">
              <BuyTicketCard
                location1="Location 1"
                location2="Location 2"
                price="$1.50"
                travelTime="1 hour"
                departureTime="10:00 AM"
                onBuyTicket={handleBuyTicket}
              />
            </div>

            {/* Location card */}
            <div className="absolute bottom-[20%] right-0 flex justify-center items-center">
              <LocationCard location1="Location 1" location2="Location 2" />
            </div>

            <div className="absolute bottom-[5%] w-full flex flex-col justify-center items-center gap-1">
              <p className="text-xxxxs text-white">Don´t have an account?</p>
              <button className="text-sm text-primary-light bg-white rounded-full px-4 py-1">
                Create
              </button>
            </div>
          </div>
        </motion.div>
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
