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