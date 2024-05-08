//board의 document schema(model)
import mongoose from 'mongoose'

const boardSchema = new mongoose.Schema({
    writer: String,
    title: String,
    contents: String
})
//이런 스키마가 있으면 , 저 세개 제외한 age 등의 data는 걸러진다.
// 단, mongoose를 통해서 저장할때는 걸러지지만, 몽고db에 직접 입력하면 가능하다.
// 즉, mongoose 스키마는 filter 역할

export const Board = mongoose.model("Board", boardSchema)