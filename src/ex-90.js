import { question } from 'readline-sync';
// 문제 090
// 사용자에게 숫자를 입력하라고 요청한다.
// 10에서 20 사이의 숫자를 입력한다면 배열에 저장한다.
// 다른 값이라면 "Outside the range"라는 메시지를 출력한다.
// 다섯 개의 숫자가 입력되었다면 "Thank you" 메시지를 출력하고
// 배열의 항목을 한 줄에 하나씩 출력하라

const numberArray = [];

function setArray() {
  while (numberArray.length < 5) {
    inputNumber();
  }
}

function inputNumber() {
  const questionUser = question('숫자를 입력해주세요..');

  if (questionUser >= 10 && questionUser <= 20) {
    numberArray.push(questionUser);
    console.log(numberArray);
  } else {
    console.log('Outside the range');
  }
}

function printNumber() {
  if (numberArray.length === 5) {
    console.log('Thank you');
    for (let i = 0; i < numberArray.length; i++) {
      console.log(numberArray[i]);
    }
  }
}

setArray();
printNumber();

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
