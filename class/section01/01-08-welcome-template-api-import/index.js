import { emailCheck, makingTemplate, sendTemplate } from "./email.js";
import { getToday } from "./utils.js";
function createUser({ name, age, school, email, createdAt }) {
  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  const isVaild = emailCheck(email);
  if (isVaild === false) return;

  // 2. 가입환영 템플릿 만들기
  const mytemplate = makingTemplate({ name, age, school, email, createdAt });

  // 3. 이메일에 가입환영 템플릿 전송하기
  sendTemplate(email, mytemplate);
}

const name = "은하";
const age = 23;
const school = "비비지초등학교";
const email = "galaxy@gmail.com";
const createdAt = getToday();

createUser({ name, age, school, email, createdAt });
//8분 24초
