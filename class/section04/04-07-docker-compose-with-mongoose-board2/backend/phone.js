import dotenv from "dotenv"
dotenv.config()
// console.log(process.env) //환경변수가 가져와지는지 확인
import coolsms from 'coolsms-node-sdk'
const mysms = coolsms.default

export function checkPhone(qqq) {
  if (qqq.length < 10 || qqq.length > 11) {
    // <early-exit>
    console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!");
    return false;
  } else {
    return true;
  }
}
 
export function getToken() {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  return result;
}

export function sendTokenToSMS(myphone, result) {
  const messageService = new mysms(process.env.SMS_API_KEY, process.env.SMS_API_SECRET)
  messageService.sendOne({ //다수에게 전송할 경우 sendMany()
    to: myphone,
    from: '01027379250',
    text: `[코드캠프] 안녕하세요?! 요청하신 인증번호는 ${result} 입니다.`
  })
  
  // console.log(myphone + "번호로 인증번호 " + result + "를 전송합니다.");
}


// 동기처리로 어디가 문제인이 알아보고 싶을 때!
// export async function sendTokenToSMS(myphone, result) {
//   const messageService = new mysms("", "")
//   const res = await messageService.sendOne({ //다수에게 전송할 경우 sendMany()
//     to: myphone,
//     from: '01027379250',
//     text: `[코드캠프] 안녕하세요?! 요청하신 인증번호는 ${result} 입니다.`
//   })
//   console.log(res)
  
// }

//npmjs -> coolsms -> coolsms-node-sdk 설치 // yarn add coolsms-node-sdk
//coolsms 회원가입, 발신번호관리, api key 관리 다 하고나서 실제 전송해보기