import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

const typeDefs = `#graphql
    type Query {
        qqq: String
    }
`

const resolvers = {
    Query: {
        qqq: () => {
            return " this is response!!"
        }
    }
}


const server = new ApolloServer({
    typeDefs: typeDefs, // swagger 부분
    resolvers: resolvers// api 부분
})

startStandaloneServer(server) // 얘가 listenr, default(4000)
// 서버 실행( node index.js) 후, 브라우저 주소창에 http://localhost:4000