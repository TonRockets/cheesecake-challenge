import { motion } from 'framer-motion'
import { useShootingStarAnimation } from '@/hooks/index'
import { PromotionalBackground } from './promotional-background'
import { BuyTicketCard, LocationCard } from './index'
import { AppIcon } from '../icons'
import { useState } from 'react'
import Loading from '@/src/app/loading'
import { Dialog } from '../dialogs'

export const PromotionalContent = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const shootingStarAnimation = useShootingStarAnimation()

  const handleBuyTicket = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setIsModalOpen(true)
    }, 2000)
  }

  return (
    <motion.div
      className="w-full md:w-1/2 md:h-full flex flex-col items-center order-1 md:order-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      role="region"
      aria-labelledby="promotional-content-title"
    >
      <header id="promotional-content-title" className="sr-only">
        Promotional Content Section
      </header>

      <div className="relative w-[300px] h-[465px] flex justify-center items-start mt-12">
        {/* Shooting star */}
        <motion.div
          className="w-1 h-1 bg-white rounded-full"
          animate={shootingStarAnimation.animate}
          transition={shootingStarAnimation.transition}
          aria-hidden="true"
        />

        {/* App background */}
        <PromotionalBackground aria-hidden="true" />

        {/* App icon */}
        <div
          className="absolute top-[5%] flex flex-col items-center gap-1"
          aria-labelledby="app-icon"
        >
          <AppIcon aria-label="App Icon" />
          <div className="text-2xl font-bold" id="app-icon">
            App
          </div>
        </div>

        {/* buy ticket card */}
        <div
          className="absolute top-[32%] left-0 flex justify-center items-center"
          aria-live="assertive"
        >
          {loading && <Loading />}
          <BuyTicketCard
            location1="Location 1"
            location2="Location 2"
            price="$1.50"
            travelTime="1h"
            departureTime="10AM"
            onBuyTicket={handleBuyTicket}
            aria-label="Buy Ticket Card"
            aria-live="assertive"
          />
        </div>

        <Dialog
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          theme="primary"
          title="Oops! Not this time!"
          content={
            <div>
              <h2 className="text-lg font-semibold text-red-600">
                Purchase Not Available Yet
              </h2>
              <p className="text-gray-700 mt-2" aria-live="assertive">
                Online ticket purchasing is not available at the moment as we
                are still finalizing our payment integration to ensure a secure
                and seamless experience.
              </p>
              <p className="text-gray-700 mt-2">
                We appreciate your patience and are working hard to launch this
                feature soon!
              </p>
            </div>
          }
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        />

        {/* Location card */}
        <div
          className="absolute bottom-[20%] right-0 flex justify-center items-center"
          aria-labelledby="location-card"
        >
          <LocationCard location1="Location 1" location2="Location 2" />
        </div>

        <div className="absolute bottom-[5%] w-full flex flex-col justify-center items-center gap-1">
          <p className="text-xxxxs text-white">Don´t have an account?</p>
          <button
            className="text-sm text-primary-light bg-white rounded-full px-4 py-1"
            aria-label="Create Account"
          >
            Create
          </button>
        </div>
      </div>
    </motion.div>
  )
}
