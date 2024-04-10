# 1. 운영체제 및 프로그램 설치(하나 하나 입력하는 방식)
#FROM ubuntu:22.04

#RUN sudo apt install nodejs 
#RUN sudo npm install -g yarn


# 1. 운영체제 및 프로그램 설치(이미 리눅스, node, npm, yarn까지 모두 깔려있는 컴퓨터 다운하는 방식)
From node:14

# 2. 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기
#RUN mkdir myfolder => copy할때 폴더가 없으면 자동으로 만들어줌.
#현재 위치에 있는 모든 파일들을 myfolder 안으로 복사해
COPY . /myfolder

#RUN cd ./myfolder/ =>nodemon을 실행시키기 위해서 myfolder 안으로 들어감
#또는 현재 작업 디렉토리를 myfolder 안으로 변경.(커서가 현재위치에서 깜빡거리게)
WORKDIR /myfolder/
# 'node_modules' 새로 설치!!
RUN yarn install
# import중인 coolsms-node-sdk 를 찾을 수 없다고 하니, 추가로 설치해 주었다!! (혼자 해결~)
RUN yarn add coolsms-node-sdk
# 3. 도커안에서 index.js 실행시키기
CMD yarn start:dev


#그런데, 현재 내 컴퓨터에 있는 'node_modules'를 띄운 컴퓨터에 복사하면 각 직원들의 컴퓨터에 깔린
#'node_modules'의 버전을 맞춰줘야하는데 그건 불편하니, 띄운 컴퓨터에서 install을 하자.
# => .dockerignore폴더에 'node_modules' 를 넣어서 복사가 안되게하고 새로 설치하자.

# < port fowarding >
#안되는 이유: http://localhost:3000 은, 내 컴퓨터의 express 3000번 포트인데 
#현재우리는 '띄운 컴퓨터'의 express 3000번 포트에서 api를 요청중이다.
#해결책 => "port fowarding" 기능으로 포트를 전달해준다.(띄운 컴퓨터의 3000으로 들어가서, Express의 3000번으로 연결됨.)
# 컴퓨터의 2500포트로 실행중인 프로그램으로 들어가서 express 3000으로 연결시킬 수도 있다. => terminal : docker run -p 2500:3000 dockerimages

# docker 종료 방법:
# 새로운 터미널 열어서 >> docker ps 로 도커 현황 확인후, >> docker stop docker id