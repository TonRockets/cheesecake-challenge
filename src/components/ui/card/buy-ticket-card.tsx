import type { BuyTicketCardProps } from '@/types/cards'
import { ArrowIcon, LocationIcon } from '../icons'
import { BusIcon } from '../icons/bus-icon'

export const BuyTicketCard: React.FC<BuyTicketCardProps> = ({
  location1,
  location2,
  price,
  travelTime,
  departureTime,
  onBuyTicket,
}) => {
  return (
    <section
      className="bg-white rounded-lg px-1 py-4 shadow-lg w-44 h-24 max-w-xs md:max-w-sm"
      role="region"
      aria-labelledby="buy-ticket-card"
    >
      <header id="buy-ticket-card" className="sr-only">
        Buy Ticket Card
      </header>
      <div className="absolute -top-6 left-6 w-11 h-11" aria-hidden="true">
        <BusIcon />
      </div>
      <div className="w-full h-full flex">
        <div className="w-3/5 h-full flex flex-col justify-center items-start text-[8.32px] text-primary font-semibold">
          <div className="w-full h-1/2 flex items-center gap-1">
            <div className="w-9 h-9 flex items-center justify-center">
              <ArrowIcon className="w-9 h-9" />
            </div>
            <div className="h-full flex flex-col justify-center items-start">
              <p id="departure-location">{location1}</p>
              <p className="text-xxxxs text-primary-lightText">DATE</p>
            </div>
          </div>
          <div className="w-full h-1/2 flex items-center gap-1">
            <div className="w-9 h-9 flex items-center justify-center">
              <LocationIcon className="w-9 h-9" />
            </div>
            <div className="h-full flex flex-col justify-center items-start">
              <p id="arrival-location">{location2}</p>
              <p className="text-xxxxs text-primary-lightText">DATE</p>
            </div>
          </div>
        </div>
        <div className="w-2/5 h-full flex flex-col items-start justify-start gap-2 text-[#BFBFBF] text-xxxxs font-semibold">
          <p>
            Travel Time:{' '}
            <span className="text-tertiary-light">{travelTime}</span>
          </p>
          <p>
            Departure on:{' '}
            <span className="text-tertiary-light">{departureTime}</span>
          </p>
          <p>
            Price:{' '}
            <span className="text-xs text-tertiary-light ml-1">{price}</span>
          </p>
          <button
            className="w-full p-1 bg-primary-light text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
            onClick={onBuyTicket}
            aria-label="Click to buy the ticket"
            aria-describedby="departure-location arrival-location"
          >
            Buy Ticket
          </button>
        </div>
      </div>
    </section>
  )
}
