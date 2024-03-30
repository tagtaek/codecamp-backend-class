import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
//graphql은 api를 만들었으면 docs를 만들어야 실행이 된다.

const typeDefs = `#graphql
    input CreateBoardInput { #input으로 들어오는애들은 input type으로 작성해야함!!
        writer: String
        title: String
        contents: String
    }

    type MyResult { #사용자 지정 type 만들기
        number: Int
        writer: String
        title: String
        contents: String
    }

    type Query {
        #fetchBoards: MyResult # 객체 1개를 의미!
        fetchBoards: [MyResult] # 배열 안에 객체 1개 이상을 의미!
    }

    type Mutation {
        #result의  타입
        #createBoard(writer: String, title: String, contents: String!): String # 느낌표: 필수입력
        createBoard(createBoardInput: CreateBoardInput!): String # MyInput은 없는거니까 또 만들어!
    }
`
//docs(schema)를 작성하지 않거나 함수명을 틀린경우 -> Error: Query.fetchBoards defined in resolvers, but not in schema

const resolvers = {
    Query: {
        fetchBoards: (parent, args, context, info) => {
            // 1. DB에 접속 후, 데이터를 조회 => 데이터를 조회했다고 가정
            const result = [
                {number: 1, writer: "로제", title: "로제입니다!", contents: "로제라구요!!",},
                {number: 2, writer: "제니", title: "제니입니다!", contents: "제니라구요!!",},
                {number: 3, writer: "소민", title: "소민이입니다!", contents: "소민이라구요!!",},
            ];

            // 2. DB에서 꺼내온 결과를 브라우저에 응답(response) 주기
            return result
        }
    },

    Mutation: {
        createBoard: (_, args) => {// 안쓰는 것중 args뒤에있는건 삭제, 앞에있는건 언더바 처리
            //args: 데이터(브라우저-백엔드), context: rea&res,  info: graphql의 기타 정보, parent: 데이터(백엔드-백엔드)
             // 1. 브라우저에서 보내준 데이터 확인하기
            console.log(args.createBoardInput.writer)
            console.log(args.createBoardInput.title)
            console.log(args.createBoardInput.contents)

            // 2. DB에 접속 후, 데이터를 저장 => 데이터 저장했다고 가정

            // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
            return "게시물 등록에 성공하였습니다."
        }
    }
}


const server = new ApolloServer({
    typeDefs,  //key와 value가 같아서 밸류 생략
    resolvers, //밸류 생략
    cors: true, // cors가 내장되어 있다.                              //모든 사이트 허용하고 싶을 때  
    // cors: { origin: ["https://naver.com", "https://daum.net"]} //원하는 특정 사이트에만 지정하고 싶을 때
})
//node modules 설치 => index.js 상위폴더 터미널에 yarn install 입력

startStandaloneServer(server) 