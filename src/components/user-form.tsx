'use client'

import { useState } from 'react'

interface UserFormProps {
  onSubmit: (name: string, email: string) => Promise<void>
}

export const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', email: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await onSubmit(formData.name, formData.email)
    setFormData({ name: '', email: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nome"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-primary hover:bg-primary-light text-white rounded"
        >
          Create user
        </button>
      </div>
    </form>
  )
}
