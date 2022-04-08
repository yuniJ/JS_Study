import { question } from 'readline-sync';
// 문제 079
// 'nums'라는 이름의 빈 배열을 생성한다.
// 사용자에게 숫자를 입력하라고 요청한다.
// 숫자가 입력되면 그것을 nums 배열 끝에 추가하고 배열을 출력한다.
// 세 개의 숫자를 입력받으면 마지막 숫자를 저장할 것인지 묻는다.
// 만약 "n"이라고 답하면 배열의 마지막 항목을 삭제하고 배열을 출력하라.

// arr.pop(); // 배열의 마지막 요소를 제거
// arr.shift(); // 배열의 첫번째 요소를 제거
// arr.splice(2, 1); // index 2 부터 1개의 요소('c')를 제거
// delete arr[1]; // delete로 배열을 삭제할 경우 요소는 그대로 존재하며 값만 삭제 됨
// .split(" "); //문자열을 일정한 구분자로 잘라서 배열로 저장
// .concat(); //arr와 전달받은 파라미터들을 합쳐서 새로운 배열을 생성하여 리턴

let nums = [];
const answer1 = question('숫자를 입력해주세요..');
nums = nums.concat(answer1.split(' '));

printList();

if (nums.length === 3) {
  const answer2 = question('마지막 숫자를 저장합니까?..');
  if (answer2 === 'n') {
    nums.pop();
    printList();
  }
}

//  리스트 출력
function printList() {
  for (let i = 0; i < nums.length; i++) {
    console.log(i + '. ' + nums[i]);
  }
}
