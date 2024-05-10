//const express = require('express') // 옛날방식 => commonjs
import express from "express"; // 요즘방식 => module
import { ProductController } from './mvc/controllers/products.controllers.js'

const app = express();

// 상품API
const productController = new ProductController()
app.post("/products/buy", productController.buyProduct)// 지금 이 안에서 실행하는게 아니기 때문에, 괄호()없음.
app.post("/product/refund", productController.refundProduct)

// 게시판 API
// app.get("/boards/...")

app.listen(3000);

//index.js => product.controller.js => cash.service.js/product.service.js
// nest.js 구조이다.