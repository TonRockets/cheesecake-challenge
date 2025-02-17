import { User } from '@/types/user'

export interface UserRepositoryInterface {
  findAll(): Promise<User[]>
  findById(id: string): Promise<User | null>
  create(user: Omit<User, 'id'>): Promise<User>
  update(id: string, user: Partial<User>): Promise<User | null>
  delete(id: string): Promise<boolean>
}
