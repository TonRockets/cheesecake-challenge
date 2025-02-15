import type { LocationCardProps } from '@/types/cards'
import { ArrowIcon, LocationIcon } from '../icons'
import { DoubleArrowIcon } from '../icons/double-arrow-icon'

export const LocationCard = ({ location1, location2 }: LocationCardProps) => {
  return (
    <section
      className="bg-white rounded-lg p-2 shadow-lg w-44 h-24 max-w-xs md:max-w-sm"
      role="region"
      aria-labelledby="location-card"
    >
      <header id="location-card" className="sr-only">
        Location Card - From {location1} to {location2}
      </header>
      <div className="w-full h-full flex">
        <div className="w-1/2 h-full flex flex-col justify-center items-start text-[8.32px] text-[#6C529E] font-semibold">
          <div className="w-full h-1/2 flex items-center">
            <div
              className="w-9 h-9 flex items-center justify-center"
              aria-hidden="true"
            >
              <ArrowIcon className="w-9 h-9" />
            </div>
            <div className="h-full flex flex-col justify-center items-start">
              <p className="text-xxxxs text-primary-lightText" id="from-label">
                FROM
              </p>
              <p id="from-location" aria-describedby="from-label">
                {location1}
              </p>
            </div>
          </div>
          <div className="w-full h-1/2 flex items-center">
            <div
              className="w-9 h-9 flex items-center justify-center"
              aria-hidden="true"
            >
              <LocationIcon className="w-9 h-9" />
            </div>
            <div className="h-full flex flex-col justify-center items-start">
              <p className="text-xxxxs text-primary-lightText" id="to-label">
                TO
              </p>
              <p id="to-location" aria-describedby="to-label">
                {location2}
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-1/2 h-full flex items-center justify-center"
          aria-hidden="true"
        >
          <DoubleArrowIcon className="w-12 h-12" />
        </div>
      </div>
    </section>
  )
}
