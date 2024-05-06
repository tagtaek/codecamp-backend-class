#            << 이 파일은 express dockerfile 입니다. >>

# 1. 운영체제 및 프로그램 설치(이미 리눅스, node, npm, yarn까지 모두 깔려있는 컴퓨터 다운하는 방식)
From node:16-alpine 
#mongoose가 요구하는 버전에 맞추어 적절한 node이미지로 변경(14 -> 16)

# 2. 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder/
RUN yarn install
RUN yarn add coolsms-node-sdk

#여기서 cache가 깨진다.
COPY . /myfolder

# 3. 도커안에서 index.js 실행시키기
CMD yarn start:dev

#빌드하면, [임시저장공간]에 >> node:14를 다운, 소스코드카피, 커서위치변경, 패키지설치 >> 가 저장됨.
#listen() 안의 숫자를 바꾸고 다시 빌드하면 dockerfile을 위에서부터 내려오면서, [임시저장공간]에서 
# >> node:14는 기억한거 가져옴
# >> 소스코드는 변경되었으니 새로 카피 (캐시가 깨짐) >> 캐시가 한번 깨지기 시작하면 재사용x, 새로 시작한다.
# 하지만 우리가 바꾼건 index.js 인데, 우리는 똑똑하지 못하게 사용해야 할까?
# solution: 깨지지 않는걸 우선순위로 가져오기 위해, 위로 올린다.

# docker ps -a >> 꺼져있는 모든컴퓨터 보기
# docker rm containerID >> 컴퓨터 삭제
# docker ps -a -q >> 꺼져있는 모든 컴퓨터 containerID 추출
# docker rm `docker ps -a -q`  >> 추출한 '결과'에 대해 삭제 실행

# >> docker images 삭제 >> docker rmi `docker images -q` 
# 안전하게 작동하기 때문에 실행중인건 놔두고 삭제된다.

# 한번에 다 삭제 >> docker system prune -a >> (얘도 실행중인거 빼고 삭제)


