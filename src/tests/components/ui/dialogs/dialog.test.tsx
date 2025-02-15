import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'

import { Dialog } from '@/src/components/ui/dialogs'

describe('Dialog', () => {
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
    }
  }

  it('should render with correct props', () => {
    const { dialog } = makeSut()

    const dialogContainer = dialog.container.firstChild as HTMLElement
    expect(dialogContainer).toHaveClass('fixed inset-0')
    expect(dialog.getByText('Test Dialog')).toBeInTheDocument()
    expect(dialog.getByText('Dialog Content')).toBeInTheDocument()
    expect(dialog.getByRole('button', { name: /fechar/i })).toBeInTheDocument()
  })

  it('should call onClose when close button is clicked', () => {
    const { dialog } = makeSut()

    const closeButton = dialog.getByRole('button', { name: /fechar/i })
    fireEvent.click(closeButton)

    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })
})
