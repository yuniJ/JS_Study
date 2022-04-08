import { question } from 'readline-sync';
// 문제 075
// 세자리 숫자 네 개가 담긴 배열을 생성한다.
// 배열의 각 항목을 한 줄에 하나씩 출력하여 사용자에게 표시한다.
// 사용자에게 세 자리의 숫자를 입력하라고 요청한다.
// 만약 입력한 숫자가 배열에 있는 숫자들 중 하나라면 배열에 그 숫자가 위치한 인덱스를 출력하라.
// 그렇지 않다면 "That is not in the list"라는 메시지를 출력하라.

// arr.pop(); // 배열의 마지막 요소를 제거
// arr.shift(); // 배열의 첫번째 요소를 제거
// arr.splice(2, 1); // index 2 부터 1개의 요소('c')를 제거
// delete arr[1]; // delete로 배열을 삭제할 경우 요소는 그대로 존재하며 값만 삭제 됨
// .split(" "); //문자열을 일정한 구분자로 잘라서 배열로 저장

const color = ['123', '456', '789', '012'];
for (let i = 0; i < color.length; i++) {
  console.log(color[i]);
}

const answer = question('세 자리의 숫자를 입력해주세요');
const result = answer;
let boolean = true;

for (let i = 0; i < color.length; i++) {
  if (result === color[i]) {
    boolean = false;
    console.log(i);
  }
}

if (boolean) {
  console.log('That is not in the list');
}
