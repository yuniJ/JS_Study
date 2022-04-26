import { question } from 'readline-sync';
// 문제 088
// 다섯 개의 정수를 입력받아 배열에 저장한다.
// 정렬을 한 후
// 역순으로 표시하라.

// String.prototype.match,
// String.prototype.replace,
// String.prototype.search,
// String.prototype.split

// toUpperCase() : 대문자 변환
// toLowercase() : 소문자 변환

// .localeCompare(compareString, locales, options) : compareString보다 앞에 있으면 -1, 뒤에 있으면 1, 같으면 0 반환
// 'a'.localeCompare('b') // -1 ,
// 'b'.localeCompare('a') // 1
// 'c'.localeCompare('c') // 0

// reverse() : 문자열 역순
// .join() : 문자열 반환
// .sort([compareFunction]) : 배열 정렬, el 문자열로 취급, 유니코드 순서로 정렬

const word = question('다섯 개의 정수를 입력해주세요..');
const answer = word.split(' ').reverse();
const array = answer
  .sort(function (a, b) {
    return a - b;
  })
  .reverse();

console.log(array);
