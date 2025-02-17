import { User } from '@/types/user'
import { UserRepositoryInterface } from '@/interfaces/user-repository'

export class UserService {
  constructor(private readonly userRepository: UserRepositoryInterface) {}

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll()
  }

  async getUserById(id: string): Promise<User | null> {
    return this.userRepository.findById(id)
  }

  async createUser(userData: Omit<User, 'id'>): Promise<User> {
    // Aqui poderíamos adicionar validações de negócio
    return this.userRepository.create(userData)
  }

  async updateUser(id: string, userData: Partial<User>): Promise<User | null> {
    return this.userRepository.update(id, userData)
  }

  async deleteUser(id: string): Promise<boolean> {
    return this.userRepository.delete(id)
  }
}
