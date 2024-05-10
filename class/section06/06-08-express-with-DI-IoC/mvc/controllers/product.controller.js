import { CashService } from './services/cash.service.js'
import { ProductService } from './services/product.service.js'
import { PointService } from './services/point.service.js'

export class ProductController {

  CashService; // class안에서, 선언은하고 초기값은 안줘도 됨.
  ProductService;

  constructor(cashService, productService){
    this.CashService = cashService
    this.ProductService = productService
  }

    buyProduct = (req, res) => {
        // 1. 돈이 있는지 확인(코드 10줄 => 2줄 => 1줄)
        //const cashService = new CashService() //index.js로 이동
        const hasMoney = this.CashService.checkValue()
        
        // 2. 판매중인지 검증(코드 10줄 => 2줄)
        // const productService = new ProductService()
        const isSoldout = this.ProductService.checkSoldout()
              
        // 3. 상품 구매하는 코드
        if(hasMoney && !isSoldout){
           res.send("상품구매 완료")
        }
      }

    refundProduct = (req, res) => {
        // 1. 판매중인지 검증(코드 10줄 => 2줄)
        // const productService = new ProductService()
        const isSoldout = this.productService.checkSoldout()
        
        // 2. 상품 환불하는 코드
        if(isSoldout){
          res.send("상품 환불 완료!!")
        }
      }
}
// 팀장님이, 모든 결제가 포인트로 이뤄지게 하라고 함.
// 모든 cashService 코드를 pointService로 바꿨음.
// 하나를 실수로 안바꿔서 cash결제가 되는일이 발생함 : 큰 문제
// => ProductController 는 CashService에 의존하고 있다!!
// "new CashService() : 의존성"
// 그렇다면, 의존성을 계속 만들지말고 인자로 받게하면 어떨까?