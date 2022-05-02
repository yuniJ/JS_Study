// 문제 089
// 정수들을 저장할 배열을 생성한다.
// 임의의 수 다섯 개를 생성하고 배열에 저장한다.
// 배열의 항목을 한 줄에 하나씩 출력하라.

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

function setRandomNumber() {
  const number = Math.random() * 100 + 1; // 100까지
  const randomNumber = Math.floor(number);
  return randomNumber;
}

function printArray() {
  const array = [];
  for (let i = 0; i < 5; i++) {
    array[i] = setRandomNumber();
  }

  for (const element of array) {
    console.log(element);
  }
}

printArray();
