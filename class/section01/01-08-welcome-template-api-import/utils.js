export function getToday() {
  const date = new Date();
  const yyyy = date.getFullYear();
  //getMonth()의 반환값이 0~11까지 이기 때문.
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");

  return `${yyyy}-${mm}-${dd}`;
}
