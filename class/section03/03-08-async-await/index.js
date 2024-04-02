import axios from 'axios'

// 1. 비동기방식
function fetchAsync(){
    const result = axios.get("https://koreanjson.com/posts/1")
    console.log("비동기방식: ",result) // Promise{ <pending> -기다리고잇다}
}

fetchAsync()

// 2. 동기방식
// async function fetchSync(){  => 함수 중복 선언 방지를 위해 화살표함수로 변경하자
//     const result = await axios.get("https://koreanjson.com/posts/1")
//     // console.log("동기방식: ",result) // 제대로된 결과 => { title: "...", }
//     console.log("동기방식: ", result.data.title)
// }

const fetchSync = async () => { //괄호 앞이 함수의 시작부분.
    const result = await axios.get("https://koreanjson.com/posts/1")
    // console.log("동기방식: ",result) // 제대로된 결과 => { title: "...", }
    console.log("동기방식: ", result.data.title)
}
fetchSync()