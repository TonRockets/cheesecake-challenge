'use client'

import { User } from '@/types/user'

interface UserListProps {
  users: User[]
  onDelete: (id: string) => Promise<void>
}

export function UserList({ users, onDelete }: UserListProps) {
  return (
    <div className="space-y-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center justify-between border border-primary-dark p-4 rounded"
        >
          <div>
            <p className="font-bold">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <button
            onClick={() => onDelete(user.id)}
            className="px-3 py-1 bg-red-500 text-white rounded"
          >
            Deletar
          </button>
        </div>
      ))}
    </div>
  )
}
