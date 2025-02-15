import { render, fireEvent } from '@testing-library/react'
import { BuyTicketCard } from '@/components/ui/card/buy-ticket-card'
import { act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Dialog } from '@/src/components/ui/dialogs'

jest.useFakeTimers()

describe('BuyTicketCard and Dialog Integration', () => {
  const mockOnBuyTicket = jest.fn()
  const mockOnClose = jest.fn()
  const makeSut = () => {
    return {
      dialog: render(
        <Dialog
          title="Test Dialog"
          content={<div>Dialog Content</div>}
          isOpen={true}
          onClose={mockOnClose}
          theme="primary"
        />
      ),
      buyTicketCard: render(
        <BuyTicketCard
          location1="Location A"
          location2="Location B"
          price="$20"
          travelTime="2h"
          departureTime="12:00 PM"
          onBuyTicket={mockOnBuyTicket}
        />
      ),
    }
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('BuyTicketCard', () => {
    it('should render with correct props', () => {
      const { buyTicketCard } = makeSut()

      expect(buyTicketCard.getByText('Location A')).toBeInTheDocument()
      expect(buyTicketCard.getByText('Location B')).toBeInTheDocument()
      expect(buyTicketCard.getByText('$20')).toBeInTheDocument()
      expect(buyTicketCard.getByText('2h')).toBeInTheDocument()
      expect(buyTicketCard.getByText('12:00 PM')).toBeInTheDocument()
    })

    it('should call onBuyTicket when button is clicked', () => {
      const { buyTicketCard } = makeSut()

      const buyButton = buyTicketCard.getByRole('button', {
        name: /click to buy the ticket/i,
      })
      fireEvent.click(buyButton)

      expect(mockOnBuyTicket).toHaveBeenCalledTimes(1)
    })
  })

  describe('Integration', () => {
    it('should show dialog after buying ticket and loading', () => {
      const { buyTicketCard, dialog } = makeSut()

      const buyButton = buyTicketCard.getByRole('button', {
        name: /click to buy the ticket/i,
      })
      fireEvent.click(buyButton)

      act(() => {
        jest.advanceTimersByTime(2000)
      })

      expect(dialog.getByRole('dialog')).toBeInTheDocument()
      expect(dialog.getByText('Dialog Content')).toBeInTheDocument()
    })
  })
})
