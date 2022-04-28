import { question } from 'readline-sync';
// 문제 092
// 두 개의 빈 배열을 생성한다.
// 하나에는 사용자가 입력할 숫자 세 개를 담을 것이고,
// 다른 하나에는 다섯 개의 임의의 숫자를 담을 것이다.
// 두 개의 배열을 큰 배열 하나로 결합한다.
// 결합한 배열을 정렬하고 각 항목을 한 줄에 하나씩 출력하라.

const adminNumber = [];
let userNumber = [];

function setRandomNumber() {
  const number = Math.random() * 100 + 1; //100까지
  const randomNumber = Math.floor(number);
  return randomNumber;
}

function printAdminNumber() {
  for (let i = 0; i < 5; i++) {
    adminNumber.push(setRandomNumber());
  }
}

function printUserNumber() {
  const questionUser = question('숫자 세 개를 입력해주세요..');
  const result = questionUser.split(' ').map(Number);
  return result;
}

function printAll() {
  const all = adminNumber.concat(userNumber);
  all.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < all.length; i++) {
    console.log(all[i]);
  }
}

printAdminNumber();
userNumber = printUserNumber();

console.log(userNumber);
console.log(adminNumber); // 어드민 배열
printAll();

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
