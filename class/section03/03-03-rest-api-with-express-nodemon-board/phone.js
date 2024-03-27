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
  console.log(myphone + "번호로 인증번호 " + result + "를 전송합니다.");
}

//export default function ~~~
