import { question } from 'readline-sync';
// 문제 094
// 다섯 개의 숫자들을 가진 배열을 출력한다.
// 숫자들 중 하나를 고르라고 사용자에게 요청한다.
// 사용자가 숫자를 고르면 그 항목의 위치(인덱스)를 출력한다.
// 만약 사용자가 입력한 숫자가 배열 안에 없다면 올바른 숫자를 입력할 때까지 다시 요청하라.
const numberArray = [];

function setRandomNumber() {
  const number = Math.random() * 100 + 1; //100까지
  const randomNumber = Math.floor(number);
  return randomNumber;
}

function printArray() {
  for (let i = 0; i < 5; i++) {
    numberArray.push(setRandomNumber());
  }
  console.log(numberArray);
  // return numberArray;
}

function printIndex() {
  const questionUser = question('숫자들 중 하나를 골라주세요..');
  const numberIndex = numberArray.findIndex(
    (userNumber) => userNumber === Number(questionUser)
  );
  console.log('숫자 위치(-) : ' + numberIndex);
  return numberIndex;
}

printArray();
while (true) {
  if (printIndex() !== -1) {
    break;
  }
}

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
