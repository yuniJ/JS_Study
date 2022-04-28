import { question } from 'readline-sync';
// 문제 093
// 사용자에게 숫자 다섯 개를 입력하라고 요청한다.
// 입력된 숫자를 정렬하고 사용자에게 표시한다.

// 배열의 숫자들 중 하나를 고르라고 사용자에게 요청한다.
// 입력된 숫자를 배열에서 삭제하고 새로운 배열에 그 값을 저장하라

function userNumber() {
  const questionUser = question('숫자 다섯 개를 입력해주세요..');
  const userNumber = questionUser.split(' ');
  userNumber.sort(function (a, b) {
    return a - b;
  });

  console.log(userNumber);
  return userNumber;
}

const userNumArray = userNumber();
const questionUser2 = question('다음 숫자들 중 하나를 고르세요..');

console.log(
  userNumArray.filter(function (userNumber) {
    return userNumber !== questionUser2;
  })
);

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
// .fill(value, start, end ) :

//중복 여부
// .some(),

// reduce()
// Map
// forEach()

// Array.prototype.find()  : 첫 번째 요소의 값을 반환
// Array.prototype.findIndex() : 찾기 이후 인덱스 반환
// Array.prototype.indexOf() : 요소를 찾을 수 있는 첫 번째 인덱스를 반환, 존재하지 않으면 -1을 반환
// Array.prototype.lastIndexOf(searchElement, fromIndex) : 마지막 인덱스를 반환하고, 요소가 존재하지 않으면 -1을 반환, fromIndex에서 시작

// Array.prototype.includes() : 배열 요소가 해당 배열에 존재하는지 확인
// Array.prototype.filter() : 매칭되는 모든 요소 찾기
// Array.prototype.every() : 모든 요소에 대해서 검사
