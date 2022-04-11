import { question } from 'readline-sync';
// 문제 087
// 단어를 입력하라고 요청한 뒤,
// 그 단어의 문자를 한 줄 에 하나씩 거꾸로 출력하라.
// 예를 들어, 'Hello'라고 입 력했다면 다음과 같이 출력되어야 한다.

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

// reverse() : 문자열 역순
// a.join() : 문자열 반환

const word = question('단어를 입력해주세요..');
const answer = word.split('').reverse();

console.log(answer.join('\n'));
