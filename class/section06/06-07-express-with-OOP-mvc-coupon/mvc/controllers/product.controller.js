import { CashService } from './services/cash.service.js'
import { ProductService } from './services/product.service.js'

export class ProductController {

    buyProduct = (req, res) => {
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
      }

    refundProduct = (req, res) => {
        // 1. 판매중인지 검증(코드 10줄 => 2줄)
        const productService = new ProductService()
        const isSoldout = productService.checkSoldout()
        
        // 2. 상품 환불하는 코드
        if(isSoldout){
          res.send("상품 환불 완료!!")
        }
      }

}