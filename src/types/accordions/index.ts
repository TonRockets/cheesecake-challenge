export interface AccordionProps {
  title: string
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
}
