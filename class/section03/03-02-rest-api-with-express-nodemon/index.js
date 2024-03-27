//const express = require('express') // 옛날방식 => commonjs
import express from "express"; // 요즘방식 => module

const app = express();

app.get("/qqq", function (req, res) {
  res.send("nodemon!!");
});

app.listen(3000);

//nodemon을 03-01-rest-api-with-express_nodemon 에 설치했기때문에
//그 위치를 바탕으로 nodemon을 실행시켜줘야함 -> package.json 수정
