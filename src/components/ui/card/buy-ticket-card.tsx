import type { BuyTicketCardProps } from '@/types/animation'
import { ArrowIcon, LocationIcon } from '../icons'
import { BusIcon } from '../icons/bus-icon'

export const BuyTicketCard = ({ location1, location2 }: BuyTicketCardProps) => {
  return (
    <div className="bg-white rounded-lg px-1 py-4 shadow-lg w-44 h-24 max-w-xs md:max-w-sm">
      <div className="absolute -top-6 left-6 w-11 h-11">
        <BusIcon />
      </div>
      <div className="w-full h-full flex">
        <div className="w-3/5 h-full flex flex-col justify-center items-start text-[8.32px] text-[#6C529E] font-semibold">
          <div className="w-full h-1/2 flex items-center gap-1">
            <div className="w-9 h-9 flex items-center justify-center">
              <ArrowIcon className="w-9 h-9" />
            </div>
            <div className="h-full flex flex-col justify-center items-start">
              <p>{location1}</p>
              <p className="text-xxxxs text-[#ADA9B5]">DATE</p>
            </div>
          </div>
          <div className="w-full h-1/2 flex items-center gap-1">
            <div className="w-9 h-9 flex items-center justify-center">
              <LocationIcon className="w-9 h-9" />
            </div>
            <div className="h-full flex flex-col justify-center items-start">
              <p>{location2}</p>
              <p className="text-xxxxs text-[#ADA9B5]">DATE</p>
            </div>
          </div>
        </div>
        <div className="w-2/5 h-full flex flex-col items-start justify-start gap-2 text-[#BFBFBF] text-xxxxs font-semibold">
          <p>
            Travel Time: <span className="text-[#51CE92]">30min</span>
          </p>
          <p>
            Departure on: <span className="text-[#51CE92]">15mint</span>
          </p>
          <p>
            Price: <span className="text-xs text-[#51CE92] ml-1">$1.50</span>
          </p>
          <button className="w-full p-1 bg-[#9A7FDD] text-white rounded-xl">
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  )
}
