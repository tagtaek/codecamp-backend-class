export function getToday() {
  const date = new Date();
  const yyyy = date.getFullYear();
  //getMonth()의 반환값이 0~11까지 이기 때문.
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");

  console.log(`오늘은 ${yyyy}년 ${mm}월 ${dd}일 ${hour}:${min}:${sec}입니다.`);
  return;
}

// const date = new Date(); // 자바스크립트 Date객체를 date라는 변수에 할당합니다.

// date.getFullYear(); // 연도를 반환합니다.
// date.getMonth(); // 월을 반환합니다. 0(월)부터 시작하므로 주의하세요!
// date.getDate(); // 일을 반환합니다.
// date.getDay(); // 요일을 반환합니다.(일요일: 0)
// date.getHours(); // 시를 반환합니다.
// date.getMinutes(); // 분을 반환합니다.
// date.getSeconds(); // 초를 반환합니다.
// date.getMilliseconds(); // 밀리초를 반환합니다.
