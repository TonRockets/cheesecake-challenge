'use client'

import React from 'react'
import { DialogProps } from '@/src/types/dialogs'
import { CloseIcon } from '../icons'

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  content,
  theme,
}) => {
  if (!isOpen) return null
  const whichTheme =
    theme === 'primary'
      ? 'bg-gradient-to-r from-primary-dark to-primary-light'
      : 'bg-gradient-to-r from-secondary-dark to-secondary-light'
  return (
    <div
      className="fixed inset-0 bg-background-dark/50 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
    >
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg mx-4 relative transform transition-all">
        {/* Header with gradient background */}
        <div
          className={`${whichTheme} rounded-t-xl p-4 flex justify-between items-center`}
        >
          <h3 id="dialog-title" className="text-white font-semibold text-lg">
            {title}
          </h3>
          <button
            role="button"
            aria-label="fechar"
            onClick={onClose}
            className="text-white hover:text-background-dark transition-colors"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Content area */}
        <div className="p-6">
          <div className="text-primary prose max-w-none">{content}</div>
        </div>
      </div>
    </div>
  )
}
