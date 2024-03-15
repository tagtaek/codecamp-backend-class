export function makingTemplate({ name, email, citizenNum, phone, siteAdd }) {
  const mytemplate = `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이메일: ${email}</div>
                <div>주민번호: ${citizenNum}</div>
                <div>휴대폰번호: ${phone}</div>
                <div>내가 좋아하는 사이트: ${siteAdd}</div>
            </body>
        </html>
        `;
  return mytemplate;
}

export function sendTemplate(email, mytemplate) {
  console.log(
    email + "이메일로 가입환영템플릿" + mytemplate + "를 전송합니다."
  );
}
