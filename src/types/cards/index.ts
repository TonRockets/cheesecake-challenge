export interface LocationCardProps {
  location1: string
  location2: string
}

export interface BuyTicketCardProps {
  location1: string
  location2: string
  price: string
  travelTime: string
  departureTime: string
  onBuyTicket: () => void
}
