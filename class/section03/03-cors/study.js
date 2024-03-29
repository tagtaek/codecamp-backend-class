/*

sop: same origin policy
=> 네이버 프론트엔드 에서는 네이버 백엔드로 데이터 요청가능.
=> 다음 프론트에서 네이버 백엔드로 데이터 요청가능.
=> 네이버 프론트에서 다음 백엔드로 데이터 요청 불가능.


CORS: cross-origin resource sharing
=> cors 허용 시, 다음 프런트에서 네이버 백으로 데이터 요청을 할 수 있게 해줌.
=> 이때, 바로 데이터를 요청해서 받아오는 것이 아님.
=> preflight 라는 cors가 허용되어있는지 묻는 요청을하고, 그에대한 대답을 받은 후 데이터 통신이 이루어짐
=> cors가 거절되어있으면, "브라우저" 에서 데이터 요청을 거부함.


proxy server: 백엔드 서버에서 다른 백엔드 서버로 데이터 요청을 '대신' 해주는 서버
=> cors 거절 시, '브라우저'에서 데이터 요청을 거부하는 것이므로 
백엔드에서 백엔드로 데이터를 요청하는 꼼수느낌
+ 브라우저를 사용하지 않는 모바일 앱에서도 백엔드에 데이터요청이가능.


<proxy server를 통해 우회할 수도 있고 굳이 필요없는 것 같은데 cors는 왜 있는걸까?>
=> cors는 백엔드가 아니라 '브라우저'를 보호해주는 자원!!!


CSRF attack:
공격을 당하게 되는 메커니즘을 기술적으로 설명하면, 사용자A가 “Web Server B”에 접속하면, 
Web Server B는 “사용자A의 Browser”에게 session ID(sid)를 포함한 쿠키(cookie)를 보냅니다.
그리고 사용자A가 로그인을 하면, Web Server B는 사용자A가 sid에 로그인 했다는 정보를 기록해 
둡니다. “사용자A의 Browser”가 Web Server B에 request를 보내면, Bowser는 sid를 포함한 
cookie를 자동으로 Web Server B에 보내고, Web Server B는 sid를 통해 request가 사용자A 
에게서 왔다고 인식합니다. 그런데, 이 때 사용자A가, C Site(공격자에 의해, “Web Server B”에게 
“위조된 HTTP request”를 보내도록 심겨진 Site)를 방문한다면, “사용자A의 Browser”는 
“Web Server B”에게 “위조된 HTTP Request”와 cookie를 함께 보내게 되고, 
“Web Server B” 는 sid를 통해, Request가 사용자A 에게서 왔다고 인식하고, 사용자A의 
account로 request를 실행하게 됩니다.
+) Attack에 성공하려면 공격자는, 사용자의 Web Browser가 “조작된 HTTP request”를 보내도록 
유도해야 합니다(예를 들면, Social engineering 기법을 사용한 email을 보내어, 
첨부된 URL 주소 또는 hyperlink를 클릭하도록 유도).
[출처] CSRF(Cross-Site Request Forgery) attack|작성자 AEP코리아네트
https://blog.naver.com/aepkoreanet/221457283624
*/