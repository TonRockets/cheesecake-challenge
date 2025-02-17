import { User } from '@/types/user'
import { UserRepositoryInterface } from '@/interfaces/user-repository'

export class InMemoryUserRepository implements UserRepositoryInterface {
  private users: User[] = [
    { id: '1', name: 'João', email: 'joao@email.com' },
    { id: '2', name: 'Maria', email: 'maria@email.com' },
  ]

  async findAll(): Promise<User[]> {
    return [...this.users]
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find((user) => user.id === id) || null
  }

  async create(userData: Omit<User, 'id'>): Promise<User> {
    const newUser = {
      id: String(this.users.length + 1),
      ...userData,
    }
    this.users.push(newUser)
    return newUser
  }

  async update(id: string, userData: Partial<User>): Promise<User | null> {
    const index = this.users.findIndex((user) => user.id === id)
    if (index === -1) return null

    const updatedUser = {
      ...this.users[index],
      ...userData,
    }
    this.users[index] = updatedUser
    return updatedUser
  }

  async delete(id: string): Promise<boolean> {
    const initialLength = this.users.length
    this.users = this.users.filter((user) => user.id !== id)
    return this.users.length !== initialLength
  }
}
