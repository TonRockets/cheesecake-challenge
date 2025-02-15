export interface DialogProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: React.ReactNode
  theme: 'primary' | 'secondary'
}
