import axios from 'axios'
import cheerio from 'cheerio'

const createMessage = async () => {
    // 입력된 메시지: "안녕하세요~  https://www.naver.com 에 방문해 주세요!"

    // 1. 입력된 메시지에서 http로 시작하는 문장이 있는지 찾기!(.find() 등의 메소드 사용)
    const url = "https://www.naver.com"

    // 2. axios.get 으로 요청해서 html코드 받아오기 => scraping
    const result = await axios.get(url)
    console.log(result.data)

    // 3. 스크래핑 결과에서 OG(오픈그래프) 코드를 골라내서 변수에 담기 => cheerio 도움 받기
    const $ = cheerio.load(result.data) //doc에서, 변수명을 '$' 로 하기를 권장함.
    $("meta").each((index, el) => { //meta tag가 5개면 each가 다섯번 반복 됨 // each: cheerio의 기능
        if($(el).attr("property") && $(el).attr("property").includes("og:")){
            // el태그에 property라는 속성이 있고, 그 속성의 값에 "og:"가 포함되면.
            const key = $(el).attr("property") // og:title, og:description, ...
            const value = $(el).attr("content") // 네이버, "네이버 메인에서 ~~"
            console.log(key, value)
        }
    })


}

createMessage()

//og: 프론트엔드 개발자들이 약속한, html코드에 스크래핑을 위한 부분을 만들어 놓은 것.

// package.json 폴더 생성: yarn init >> enter x 10
// yarn add axios
// yarn add cheerio