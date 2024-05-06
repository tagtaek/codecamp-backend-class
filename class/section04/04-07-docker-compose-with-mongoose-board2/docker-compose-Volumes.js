/* 
problem: nodemon을 쓰는데 source code를 바꿀때마다 자동으로 refresh가 안돼서 빌드를 다시해야했던 이유.

=> 내 컴퓨터의 vscode와 back-end가 실행되는 도커 컴퓨터가 있다.
vscode의 index.js를 수정해봤자, 이미 빌드 된 도커 컴퓨터에서 실행되는 index.js는 바뀌지않으니,
docker의 nodemon은 수정사항을 감지하지 못하고, 당연히 도커 안의 express도 refresh를 못해줌.
떠라서 docker를 다시 빌드해줘야 한다.

solution: docker Volumes 라는 속성을 사용 : 내 컴퓨터와 도커컴퓨터의 저장공간(Volumes)을 공유하자!
=> 내 vscode의 index.js 와 도커의 index.js사이에 길을 만들어준다.
=> 쌍방향으로 수정사항이 반영되게 해준다.
=> 이제, 도커 안의 수정사항을 또 nodemon이 감지하여 express를 refresh 해준다.

ex)
volumes:
    - ./index.js:/myfolder/index.js
    - ./email.js:/myfolder/email.js
    # - ./src:/myfolder/src #이렇게 아예 폴더를 만들어서 연결시킬 수도 있다.




// +)mongoose가 명령어를 간단하게 바뀌주는 과정을 보고 싶을때.(실제 dB에 입력해야되는 명령어를 보여줌)
mongoose.set("debug", true)
*/

