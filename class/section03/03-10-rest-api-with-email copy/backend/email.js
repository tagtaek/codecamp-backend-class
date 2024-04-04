// data: 이름, 나이, 학교, 이메일, 가입일
// 1. '@'가 있는지 or 비어있는지
// 2. 가입환영 템플릿 만들기
// 3. 이메일에 템플릿 전송하기 (html 출력으로 대체)
import { getToday } from "./utils.js";
import nodemailer from 'nodemailer'
import dotenv from "dotenv"
dotenv.config()

export function emailCheck(email) {
  if (email === undefined || email.includes("@") === false) {
    //email.includes("@") && email !== ""
    console.log("email을 정확하게 입력해 주세요!!");
    return false;
  } else {
    return true;
  }
}

export function makingTemplate({ name, age, school, createdAt }) {
  const mytemplate = `
      <html>
          <body>
              <h1>${name}님 가입을 환영합니다!!!</h1>
              <hr />
              <div>이름: ${name}</div>
              <div>나이: ${age}</div>
              <div>학교: ${school}</div>
              <div>가입일: ${createdAt}</div>
          </body>
      </html>
      `;
  return mytemplate;
}

export async function sendTemplate(email, mytemplate) {
  const transpoter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codetaek@gmail.com",
      pass: process.env.EMAIL_API_PASS
    }
  })

  const res = await transpoter.sendMail({
    from: "codetaek@gmail.com",
    to: email,
    subject: "[코드캠프] 가입을 축하합니다!!!" ,
    html: mytemplate
  })
  console.log(res)
  
  
  // console.log(
  //   email + "이메일로 가입환영템플릿" + mytemplate + "를 전송합니다."
  // );
}
// app name: codecamp_test  app pw: amev ygho vyly iyxc

