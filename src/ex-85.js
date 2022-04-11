import { question } from 'readline-sync';
// 문제 085
// 사용자의 이름(영어로)을 입력하라고 요청한 뒤,
// 그 이름 모음이 몇 개인지 출력하라.

// 정규 표현식 = 객체
// RegExp.prototype.exec,
// RegExp.prototype.test,
// String.prototype.match,
// String.prototype.replace,
// String.prototype.search,
// String.prototype.split
// /시작 /종료 i 플래그
// 플래그 종류 - i : 대소문자 구별하지 않음, g : 문자열 내의 모든패턴 검색, m : 문자열의 행이 바뀌어도 검색

const checkVowel = /[a,eiou]/gi;
const word = question('이름(영어로)을 입력해주세요..');
console.log(
  '이름에 모음이 ' + word.match(checkVowel).length + '개 포함되어 있습니다.'
);
