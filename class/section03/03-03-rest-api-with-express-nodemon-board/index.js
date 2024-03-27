//const express = require('express') // 옛날방식 => commonjs
import express from "express"; // 요즘방식 => module

const app = express();

app.use(express.json()); //옛날에는 bodyParser 사용
//얘는 위에서부터 내려오기때문에 맨위에 작성해야한다.

app.get("/boards", function (req, res) {
  // 1. DB에 접속 후, 데이터를 조회 => 데이터를 조회했다고 가정
  const result = [
    {
      number: 1,
      writer: "로제",
      title: "로제입니다!",
      contents: "로제라구요!!",
    },
    {
      number: 2,
      writer: "제니",
      title: "제니입니다!",
      contents: "제니라구요!!",
    },
    {
      number: 3,
      writer: "소민",
      title: "소민이입니다!",
      contents: "소민이라구요!!",
    },
  ];

  // 2. DB에서 꺼내온 결과를 브라우저에 응답(response) 주기
  res.send(result);
});

app.post("/boards", function (req, res) {
  // 1. 브라우저에서 보내준 데이터 확인하기
  console.log(req);
  console.log("=============");
  console.log(req.body);

  // 2. DB에 접속 후, 데이터를 저장 => 데이터 저장했다고 가정

  // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
  res.send("게시물 등록에 성공하였습니다.");
});

app.post("/tokens/phone", function (req, res) {
  // 1. 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
  const isVaild = checkPhone(myphone);
  if (isVaild === false) return; // <early-exit>
  // is~ / has~ 라는 변수이면 bool데이터를 받겠구나!

  //2. 핸드폰 토큰 6자리 만들기
  const mytoken = getToken();

  //3. 핸드폰번호에 토큰 전송하기
  sendTokenToSMS(myphone, mytoken);
  //나중에는, 함수명 자체가 주석이 되는 느낌으로!!
});

app.listen(3000);

//nodemon을 03-01-rest-api-with-express_nodemon 에 설치했기때문에
//그 위치를 바탕으로 nodemon을 실행시켜줘야함 -> package.json 수정
//   "scripts": {
//   "start:dev": "nodemon index.js"
// },   작성 후  터미널에 yarn start:dev 입력