export function haveKey(string) {
  if (string.includes("-") === false) {
    console.log("에러 발생!!! 형식이 올바르지 않습니다!!!");
    return false;
  } else {
    return true;
  }
}

export function sixSeven(string) {
  const num = string.split("-");
  if (num[0].length !== 6 || num[1].length !== 7) {
    console.log("에러 발생!!! 형식이 올바르지 않습니다!!!");
    return false;
  } else {
    return true;
  }
}

export function privateNumber(string) {
  let newNum = string.substr(0, 8);
  // 그냥 string에 인덱스로 접근해서 for문으로 뒷6자리를 '*'로 바꾸면 왜 안될까?
  newNum = newNum + "******";
  console.log(newNum);
}
