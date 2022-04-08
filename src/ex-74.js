import { question } from 'readline-sync';
// 문제 074
// 열 개의 색상이 담긴 배열을 생성한다.
// 사용자에게 0에서 4 사이의 시작 번호와 5에서 9 사이의 끝 번호를 입력하라고 요청하고
// 입력된 시작 번호부터 끝 번호까지의 색상을 출력하라.

// arr.pop(); // 배열의 마지막 요소를 제거
// arr.shift(); // 배열의 첫번째 요소를 제거
// arr.splice(2, 1); // index 2 부터 1개의 요소('c')를 제거
// delete arr[1]; // delete로 배열을 삭제할 경우 요소는 그대로 존재하며 값만 삭제 됨
// .split(" "); //문자열을 일정한 구분자로 잘라서 배열로 저장

const color = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'purple',
  'black',
  'white',
  'pink',
];

const answerStartNumber = question('0에서 4 사이의 시작 번호를 입력해주세요');
const answerEndNumber = question('5에서 9 사이의 끝 번호를 입력해주세요');
const StartNumber = answerStartNumber;
const EndNumber = answerEndNumber;

for (let i = StartNumber; i <= EndNumber; i++) {
  console.log(color[i]);
}
