//const express = require('express') // 옛날방식 => commonjs
import express from "express"; // 요즘방식 => module
import { CashService } from './cash.js'
import { ProductService } from './product.js'

const app = express();

// 상품 구매하기 API
app.post("/products/buy", function (req, res) {
  // 1. 돈이 있는지 확인(코드 10줄 => 2줄)
  const cashService = new CashService()
  const hasMoney = cashService.checkValue()
  
  // 2. 판매중인지 검증(코드 10줄 => 2줄)
  const productService = new ProductService()
  const isSoldout = productService.checkSoldout()
        
  // 3. 상품 구매하는 코드
  if(hasMoney && !isSoldout){
     res.send("상품구매 완료")
  }
});

// 상품 환불하기 API
app.post("/product/refund", (req, res) => {
  // 1. 판매중인지 검증(코드 10줄 => 2줄)
  const productService = new ProductService()
  const isSoldout = productService.checkSoldout()
  
  // 2. 상품 환불하는 코드
  if(isSoldout){
    res.send("상품 환불 완료!!")
  }
})

// 판매중인지 검증하는 코드 같은 것들은 부품으로 만들어서 가져다 쓰는게 좋아보인다.

app.listen(3000);
