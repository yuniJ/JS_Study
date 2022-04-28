import { question } from 'readline-sync';
// 문제 091
// 다섯 개의 숫자(이 숫자들 중 2개는 반복 되어야 함)를 담고 있는 배열을 생성한다.
// 사용자에게 배열 전체를 출력한다.
// 사용자에게 배열 속에 있는 숫자들 하나를 입력하라고 요청한 뒤,
// 입력한 숫자가 배열에 몇 개 있는지 메시지를 표시하라.

const numberArray = [];

function setRandomNumber() {
  const number = Math.random() * 100 + 1; //100까지
  const randomNumber = Math.floor(number);
  return randomNumber;
}

function printArray() {
  // const array = [];
  for (let i = 0; i < 5; i++) {
    numberArray.push(setRandomNumber());
  }

  console.log(numberArray);

  for (let i = 0; i < 2; i++) {
    numberArray.fill(numberArray[i], 3 + i, 4 + i);
  }
  console.log(numberArray);

  // console.log(numberArray.fill(numberArray[0], 3, 4));
  // console.log(numberArray.fill(numberArray[1], 4, 5));
}
printArray();

const questionUser = question('배열 속에 있는 숫자들 하나를 입력해주세요..');

const result = numberArray.filter(function (value, index) {
  if (value === Number(questionUser)) {
    return value;
  }
});

console.log(result);
console.log('당신이 선택한 숫자는 ' + result.length + '개 입니다');
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
