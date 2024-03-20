/*
//graphql 연습용 
//http://backend-example.codebootcamp.co.kr/graphql

//프로필 생성
mutation{ 
    createProfile(name:"soozi", age: 30, school: "답십리초등학교"){
      message //메세지를 return받을거야.
    }
  }
//프로필 생성 응답
  {
    "data": {
      "createProfile": {
        "message": "프로필이 정상적으로 등록되었습니다."
      }
    }
  }

  //프로필 조회
  query{
    fetchProfile(name: "soozi"){
      name
      age
      school
    }
  }
  //프로필 조회 응답
  {
    "data": {
      "fetchProfile": {
        "name": "soozi",
        "age": 30,
        "school": "답십리초등학교"
      }
    }
  } //문제점: 이름이 soozi인 프로필이 두개 이상인 경우


  //게시판에 글 생성
  mutation{
    createBoard(writer: "so-min", title: "hi~", contents: "hey!"){
      number //각 글 구분가능한 number를 줘
      message
    }
  }
//게시판에 글 생성 응답
{
    "data": {
      "createBoard": {
        "number": 22404 //22404번째 글이야
      }
    }
  }

  //게시판에서 글 하나 조회
  query{
    fetchBoard(number: 22404 ){
      writer,
      title,
      contents //객체를 아래로 나열하는 경우 쉼표 생략가능
      like
      createdAt
    }
  }
  //게시판에서 글 하나 조회 응답
  {
    "data": {
      "fetchBoard": {
        "writer": "so-min",
        "title": "hi~",
        "contents": "hey!",
        "like": 0,
        "createdAt": "2024-03-16T14:09:45.953Z"
      }
    }
  }

  //게시판 수정 docs
  updateBoard(
    number: Int //writer를 주면 number를 수정가능하다는 말인가?
    writer: String //number를 주면 writer를 수정할수있다는 건가?
    title: String
    contents: String
    ): Return
    type Return {
    _id: String
    number: Int
    message: String
    }
 //수정할 때 좋지 않은 api


 // 상품 생성
 mutation{
    createProduct(
      seller: "somin" // seller를 아래에 포함시켜도 됨.
      createProductInput: { //상품 정보 객체
        name: "mouse"
        detail: "useful mouse"
        price: 4000
      }
    ){
      _id
      number
    } //id와 number를 받을거야.
  }
// 생품 생성 응답
{
    "data": {
      "createProduct": {
        "_id": "7893adc0-8ba1-4f52-80bb-32450d6eaa75",
        "number": null
      }
    }
  }

//상품 조회
query{
    fetchProduct(productId: "7893adc0-8ba1-4f52-80bb-32450d6eaa75")
    {
      //상품 아이디는 이거고
      //받고 싶은건 아래야.
      name
      price
    }
  }

  //상품조회 응답
  {
    "data": {
      "fetchProduct": {
        "name": "mouse",
        "price": 4000
      }
    }
  }

  //상품 수정
  mutation{
    updateProduct(
      productId:"7893adc0-8ba1-4f52-80bb-32450d6eaa75"
      updateProductInput: {
        price: 2000 //price를 바꿀거고
      }
    ){
      _id //아이디를 줘
        message //바뀌었다는 메세지를 줘
    }
  }

  //항상 객체를 보내는가?
  query{
    fetchBoardsCount //아니다!!
    //게시물 수 조회
  }

  //조회 응답
  {
    "data": {
      "fetchBoardsCount": 849
    }
  }
*/
