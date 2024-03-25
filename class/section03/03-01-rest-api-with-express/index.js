//const express = require('express') // 옛날방식 => commonjs
import express from "express"; // 요즘방식 => module

const app = express();

app.get("/qqq", function (req, res) {
  res.send("Hello World");
});
//app.get("/qqq",~  >> endpoint가 /qqq인 get방식의 api를 만들겠다.
//function() {}     >> 실행시킬 middleware 함수
//실행시킨 api통신 끄는법 : control + 'c'
//서버 실행중에 메세지 바꾸면 적용되지 않는다.
//내 컴퓨터 주소=> http://localhost:3000

app.listen(3000);
//3000: 포트번호, listen: 기다린다.

//node_modules에는 express와 수많은 파일들이 있는데, 개발자가 express만들때 활용한 것들인다.
// node_modules 폴더를 지워도, 하위(ls)에 package.json이 있는 위치에서
// yarn install 을 하면 다시 설치된다.

// package.json파일은, 설치된 것들을 관리한다.(github에 꼭 업로드)

// yarn.lock은 express를 포함헤 함께 설치된 수많은 파일들의 버전을 관리한다
// 중간에 버전이 바뀌면 내가 작성한코드가 작동하지 않을 수 있기 때문에, version을 고정시키는 것.
// (github에 꼭 업로드)

/* 다시설치할거면 그냥 같이 깃허브에 업로드 하지??
->모든 사람이 실제로 실행하기 위해 소스코드를 보는것이 아니기 때문*/

//http://naver.com:80/qqq -> http 기본포트 80, 생략가능
//https://naver.com:443/qqq -> https  기본포트 443, 생략가능
