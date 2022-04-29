import { question } from 'readline-sync';
// 문제 095
// 소수점 이하 두 자리가 있는 10과 100 사이의 숫자 다섯 개를 포함하는 배열을 생성한다.
// 사용자에게 2와 5 사이의 정수를 입력하도록 요청한다.
// 입력한 숫자가 범위에 없는 숫자라면 적절한 에러 메시지를 출력하고 다시 입력 하라고 한다.

// 배열에 있는 각 숫자를 사용자가 입력한 숫자로 나누고 소수점 둘째자리까지 표시하라.

const numberArray = [];

function setRandomNumber() {
  const randomNumber = Math.random() * (100 - 10) + 10;
  return Math.round(randomNumber * 100) / 100.0;
}

// console.log(setRandomNumber());
function printArray() {
  for (let i = 0; i < 5; i++) {
    numberArray.push(setRandomNumber());
  }
  console.log(numberArray);
  // return numberArray;
}

function userNumber() {
  const questionUser = question('2와 5 사이의 정수를 입력해주세요..');
  if (questionUser >= 2 && questionUser <= 5) {
    return questionUser;
  } else {
    return false;
  }
}

function divideNumber() {
  let userNumberArray;

  while (true) {
    userNumberArray = userNumber();

    if (userNumberArray) {
      break;
    }
  }

  console.log('유저가 선택한 값 : ' + userNumberArray);

  const result = numberArray.map((arr) => arr / userNumberArray);

  console.log(result); //나누고 배열 저장

  console.log(result.map((arr) => Math.round(arr * 100) / 100.0)); //소수점 2자리까지 출력
}

printArray();
divideNumber();

//Math.round() 소수점 첫번째 자리 반올림하여 정수로 리턴
// Math.ceil() : 올림
// Math.floor() : 버림

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

// .reduce()
// .map() : 배열 내의 모든 요소에 주어진 함수실행, 새로운 배열로 반환
// .forEach()

// Array.prototype.find()  : 첫 번째 요소의 값을 반환
// Array.prototype.findIndex() : 찾기 이후 인덱스 반환
// Array.prototype.indexOf() : 요소를 찾을 수 있는 첫 번째 인덱스를 반환, 존재하지 않으면 -1을 반환
// Array.prototype.lastIndexOf(searchElement, fromIndex) : 마지막 인덱스를 반환하고, 요소가 존재하지 않으면 -1을 반환, fromIndex에서 시작

// Array.prototype.includes() : 배열 요소가 해당 배열에 존재하는지 확인
// Array.prototype.filter() : 매칭되는 모든 요소 찾기
// Array.prototype.every() : 모든 요소에 대해서 검사
