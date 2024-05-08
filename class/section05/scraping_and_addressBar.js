/*
1. 다른 사이트에서 정보 가져오자!

a) Scraping(긁기): 한 번 가져오기 => Cheerio(도구)
b) Crawling(헤엄치기): 꾸준히 가져오기 => Puppeteer(도구)


2. 브라우저 주소창이 포스트맨(=axios =mac terminal의 curl)과 같다?
=> api를 요청하는 도구이다.
=> url을 입력하면 html파일을 가져오는 것.
=> postman에 http://koreanjson.com/posts/1 을 입력하면 {id, title, content..} 등을 
가져오는 것과 같이 curl, 주소창도 동일하다.
=> 즉, 주소창은 api-get 요청하는 도구이다.

=> 똑같이 html 코드를 가져오는데, "browser"는 그 코드를 해석해서 그림을 그려서 보여주는 프로그램이다.



+) html을 주면 front, Json을 주면 back
=> Json: 데이터, 함수등을 http프로토콜 위에서 전달하기위해 jacascript가 데이터를 표현하는 방식으로
만든 데이터 포맷. 
*/