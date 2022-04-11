import { question } from 'readline-sync';
// 문제 086
// 사용자에게 새로운 비밀번호를 입력하라고 요청하고, 한 번 더 입력하라고 요청한다.
// 입력한 두 개의 비밀번호가 일치하면 "Thank you'"라고 출력한다.
// 만약 입력한 문자는 서로 일치하는데 대소문자가 틀리다면 "They must be in the same case"라고 출력한다.
// 문자가 일치하지 않는다면 "Incorrect" 메시지를 출력하라.

// 정규 표현식 = 객체
// RegExp.prototype.exec,
// RegExp.prototype.test,
// String.prototype.match,
// String.prototype.replace,
// String.prototype.search,
// String.prototype.split
// /시작 /종료 i 플래그
// 플래그 종류 - i : 대소문자 구별하지 않음, g : 문자열 내의 모든패턴 검색, m : 문자열의 행이 바뀌어도 검색

// toUpperCase() : 대문자 변환
// toLowercase() : 소문자 변환

// .localeCompare()

const passWord1 = question('새로운 비밀번호를 입력해주세요..');
const passWord2 = question('한번 더 입력해주세요..');
const regex = new RegExp(passWord1, 'gi');
const comparison = regex.test(passWord2);

if (passWord1 === passWord2) {
  console.log('Thank you');
} else if (comparison) {
  console.log('They must be in the same case');
} else {
  console.log('Incorrect');
}
