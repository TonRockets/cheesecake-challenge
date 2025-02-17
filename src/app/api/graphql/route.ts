import { createSchema, createYoga } from 'graphql-yoga'
import { typeDefs } from '@/graphql/schema'
import { createResolvers } from '@/graphql/resolvers'
import { InMemoryUserRepository } from '@/repositories/in-memory-user.repository'
import { UserService } from '@/services/user.service'

const userRepository = new InMemoryUserRepository()
const userService = new UserService(userRepository)

const schema = createSchema({
  typeDefs,
  resolvers: createResolvers(userService),
})

const yoga = createYoga({
  schema,
  // Configurando o Yoga específicamente para Next.js 15
  graphqlEndpoint: '/api/graphql',
  fetchAPI: {
    Request: Request,
    Response: Response,
  },
})

// Handlers para rotas GET e POST
export async function GET(request: Request) {
  return yoga.handleRequest(request, {})
}

export async function POST(request: Request) {
  return yoga.handleRequest(request, {})
}
