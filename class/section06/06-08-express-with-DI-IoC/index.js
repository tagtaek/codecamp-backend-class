//const express = require('express') // 옛날방식 => commonjs
import express from "express"; // 요즘방식 => module
import { ProductController } from './mvc/controllers/product.controller.js'
import { CouponController } from './mvc/controllers/coupon.controller.js'
import { CashService } from './mvc/controllers/services/cash.service.js'
import { ProductService } from './mvc/controllers/services/product.service.js'
import { PointService } from './mvc/controllers/services/point.service.js'

const app = express();
                                            // === 의존성주입으로 발생하는 장점 ===
const cashService = new CashService()       // 1. new 한번으로 모든 곳에서 재사용(싱글톤패턴) => 저장공간 효율^
const productService = new ProductService() // 2. 의존성 주입으로 몽땅 한꺼번에 변경 가능
const pointService = new PointService()     // 3. 의존성 주입으로 쿠폰 구매 방식을 포인트 결제로 '안전하게' 변경 가능
                                            
                                            // 이렇게 index.js에서 객체를 만들어서 주입하는 경우
                                            // loose-coupling(느슨한 결합)

                                            // 컨트롤러에 필요할때마다 new 객체를 생성하는경우
                                            // const cashService = new CashService() n개 => tight-coupling(강한결합)
                                            // 이 역할을 대신 해주는 Nestjs 도구 : IoC(inversion of controll) container
                                            // => 알아서 new 하고 주입함

                                            // "의존성주입"으로 "싱글톤패턴" 구현가능해짐
                                            // => "의존성주입" 이면, "싱글톤패턴" 인가? (x)



// 상품API
const productController = new ProductController(cashService, productService)
app.post("/products/buy", productController.buyProduct)// 지금 이 안에서 실행하는게 아니기 때문에, 괄호()없음.
app.post("/product/refund", productController.refundProduct)

// 쿠폰(상품권)API
const couponController = new CouponController(cashService)
app.post("/coupons/buy", couponController.buyCoupon)// 상품권을 돈주고 구매하는 API

// 게시판 API
// app.get("/boards/...")

app.listen(3000);

//index.js => product.controller.js => cash.service.js/product.service.js
// nest.js 구조이다.