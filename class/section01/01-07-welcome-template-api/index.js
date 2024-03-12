// data: 이름, 나이, 학교, 이메일, 가입일
// 1. '@'가 있는지 or 비어있는지
// 2. 가입환영 템플릿 만들기
// 3. 이메일에 템플릿 전송하기 (html 출력으로 대체)
function emailCheck(email) {
  if (email === undefined || email.includes("@") === false) {
    //email.includes("@") && email !== ""
    console.log("email을 정확하게 입력해 주세요!!");
    return false;
  } else {
    return true;
  }
}

function makingTemplate({ name, age, school, createdAt }) {
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

function sendTemplate({ email, mytemplate }) {
  console.log(
    email + "이메일로 가입환영템플릿" + mytemplate + "를 전송합니다."
  );
}

function createUser({ name, age, school, email, createdAt }) {
  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  const isVaild = emailCheck(email);
  if (isVaild === false) return;

  // 2. 가입환영 템플릿 만들기
  const mytemplate = makingTemplate({ name, age, school, email, createdAt });

  // 3. 이메일에 가입환영 템플릿 전송하기
  sendTemplate({ email, mytemplate });
}

const name = "은하";
const age = 23;
const school = "비비지초등학교";
const email = "galaxy@gmail.com";
const createdAt = "2024-03-12"; //new Date() 가 포함된 함수 작성.

createUser({ name, age, school, email, createdAt });
//8분 24초
