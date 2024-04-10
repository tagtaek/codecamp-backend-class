# 1. 운영체제 및 프로그램 설치(하나 하나 입력하는 방식)
# dockerhub로부터 자동으로 가져온다.
FROM ubuntu:22.04
#터미널이 설치되면 명령어를 통해 프로그램을 실행시킬 수 있다.
# 컴퓨터녈 다운로드 명령어 mac: brew install / ubuntu: apt install

RUN sudo apt install nodejs 
#sudo: 관리자권한  
#우분투 컴퓨터에 nodejs를 설치해줘

RUN sudo npm install -g yarn
# npm을 활용해서 yarn을 설치해줘.


#컴퓨터 띄울때마다 다시 이렇게해야돼?
# dockerhub에 node라는 좋은걸 누가 올려놓았음.
# nodejs, npm, yarn 등이 다 설치되어있는 컴퓨터.


# 1. 운영체제 및 프로그램 설치(이미 리눅스, node, npm, yarn까지 모두 깔려있는 컴퓨터 다운하는 방식)
From node:14

# 2. 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기

# RUN mkdir myfolder
#myfolder 라는 폴더 만들어

COPY ./index.js /index.js
#docker 바깥의 내용을 안쪽으로 복사

#RUN cd myfolder
#myfolder 안으로 들어가

# 3. 도커안에서 index.js 실행시키기
#RUN node index.js 
#도커 이미지(파일) 저장될때 RUN까지(실행결과물) 저장된다. 라이브러리를 설치하는 부분에서 주료 활용됨.

#CMD는 본인윗줄까지(세팅까지만) 이미지가 저장되고, 나중에 '실행시킬때' CMD가 실행된다.
#CMD 명령어는 마지막에 한번만 사용할 수 있다.
CMD node index.js

#터미널에 >> docker build . >> 현재 폴더안엔있는 도커파일 빌드해줘. =>> 도커이미지 만들기
#저장한 이미지를 보고 싶으면 >>   docker images
#이미지를 실행시키고 싶어 >>  docker run 5dcdd26f25f5(이미지 id)
#도커 터미널에서 >> 몇개의 프로세스가 있는지 알고 싶어 >> docker ps
#도커 컴퓨터에 들어가보고 싶어 >> 도커터미널에서 >> docker exec -it 컨테이너id /bin/bash 
#docker exec-it : container에 특정명령을 실행할 수 있게 해줌
#-it : 바꿀수 있게해줘    /bin/bash: 명령어 입력기 만들어짐 >> mkdir qqq, ls, exit(컴퓨터에서 빠져나옴) 등 명령어 입력가능 (내 컴퓨터와 다른 컴퓨터임!!)
#docker 끄고 싶어 >> docker stop 컨테이너id >> docker ps 로 꺼졋는지 확인