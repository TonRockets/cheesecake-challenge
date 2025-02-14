export interface AnimationConfig {
  initial: object
  animate: object
  transition?: object
}

export interface ScrollAnimationConfig {
  start: number
  end: number
}

export interface MockupLayer {
  id: string
  initialAnimation: AnimationConfig
  content: React.ReactNode
}

export interface AccordionProps {
  title: string
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
}

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
