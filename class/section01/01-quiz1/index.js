import { haveKey, sixSeven, privateNumber } from "./api.js";

function customRegistrationNumber(citizenNumber) {
  // 1. 주민번호 가운데가 "-"로 구성되어야 한다.
  const hasKey = haveKey(citizenNumber);
  if (hasKey === false) return;

  // 2. 주민번호는 앞 6자리, 뒤 7자리로 구성되어야 한다.
  const isValid = sixSeven(citizenNumber);
  if (isValid === false) return;

  // 3. 뒤 7자리 중, 끝 6자리는 *로 변경해서 콘솔에 출력한다.
  privateNumber(citizenNumber);
}

customRegistrationNumber("210510-1010101");
//210510-1******

customRegistrationNumber("210510-1010101010101");
//에러 발생!!! 형식이 올바르지 않습니다!!!

customRegistrationNumber("2105101010101");
//에러 발생!!! 형식이 올바르지 않습니다!!!
