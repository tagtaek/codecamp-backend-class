function qqq(aaa) {
  console.log(aaa); // 객체
  console.log(aaa.name); // 로제
  console.log(aaa.age); // 20
  console.log(aaa.school); // 블랙핑크초등학교
}

const name = "로제";
const age = 20;
const school = "블랙핑크초등학교";

// const profile = {
//   name: name,
//   age: age,
//   school: school,
// };

//shorthand-property:
//키와 밸류가 같아서, 밸류를 생략함.

// const profile = {
//   name,
//   age,
//   school,
// };
const profile = { name, age, school };

qqq(profile); //1. 변수에 담아서 보내주기
qqq({ name, age, school }); //2. 그냥 통째로 보내주기
// => 결과는 동일함
