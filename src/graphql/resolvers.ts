import { UserService } from '@/services/user.service'
import { User } from '@/src/types/user'

export const createResolvers = (userService: UserService) => ({
  Query: {
    users: () => userService.getAllUsers(),
    user: (_: unknown, { id }: { id: string }) => userService.getUserById(id),
  },
  Mutation: {
    createUser: (
      _: unknown,
      { name, email }: { name: string; email: string }
    ) => userService.createUser({ name, email }),
    updateUser: (_: unknown, { id, name, email }: User) =>
      userService.updateUser(id, { name, email }),
    deleteUser: (_: unknown, { id }: { id: string }) =>
      userService.deleteUser(id),
  },
})
