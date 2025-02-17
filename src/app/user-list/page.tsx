'use client'

import { User } from '@/types/user'
import { Suspense, useEffect, useState } from 'react'
import Loading from '../loading'
import { UserList } from '@/src/components/user-list'

export default function UserListPage() {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<string | null>(null)

  const executeGraphQL = async (query: string) => {
    try {
      const response = await fetch('/api/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      if (result.errors) {
        throw new Error(result.errors[0].message)
      }

      return result.data
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      console.error('GraphQL Error:', err)
      throw err
    }
  }

  const fetchUsers = async () => {
    try {
      setError(null)
      const query = `
        query {
          users {
            id
            name
            email
          }
        }
      `
      const data = await executeGraphQL(query)
      setUsers(data.users)
    } catch {
      setUsers([])
    }
  }

  const deleteUser = async (id: string) => {
    try {
      setError(null)
      const mutation = `
        mutation {
          deleteUser(id: "${id}")
        }
      `
      await executeGraphQL(mutation)
      await fetchUsers()
    } catch {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [users])

  return (
    <Suspense fallback={<Loading />}>
      <main className="md:max-w-3xl  p-4">
        <UserList onDelete={deleteUser} users={users} />
      </main>
    </Suspense>
  )
}
