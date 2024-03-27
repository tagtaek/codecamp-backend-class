function checkPhone(qqq) {
  if (qqq.length < 10 || qqq.length > 11) {
    // <early-exit>
    console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!");
    return false;
  } else {
    return true;
  }
}

function getToken() {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  return result;
}

function sendTokenToSMS(myphone, result) {
  console.log(myphone + "번호로 인증번호 " + result + "를 전송합니다.");
}

function createTokenOfPhone(myphone) {
  const isVaild = checkPhone(myphone);
  if (isVaild === false) return; // <early-exit>
  // is~ / has~ 라는 변수이면 bool데이터를 받겠구나!

  const mytoken = getToken();

  sendTokenToSMS(myphone, mytoken);
  //나중에는, 함수명 자체가 주석이 되는 느낌으로!!

  res.send("인증완료!!");
}

createTokenOfPhone("01012345678"); // 01012345678: 인자(argument)
