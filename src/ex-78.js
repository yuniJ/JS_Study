import { question } from 'readline-sync';
// 문제 078
// 네 개의 TV 프로그램 타이틀을 담은 배열을 생성하고 각 항목을 한 줄씩 출력한다.
// 사용자에게 다른 프로그램을 입력하도록 요청하고 배열에서의 원하는 위치를 묻는다.
// 입력한 프로그램 타이틀을 원하는 위치에 삽입하고 다섯 개 의 TV 프로그램 모두를 다시 출력한다.

// arr.pop(); // 배열의 마지막 요소를 제거
// arr.shift(); // 배열의 첫번째 요소를 제거
// arr.splice(2, 1); // index 2 부터 1개의 요소('c')를 제거
// delete arr[1]; // delete로 배열을 삭제할 경우 요소는 그대로 존재하며 값만 삭제 됨
// .split(" "); //문자열을 일정한 구분자로 잘라서 배열로 저장
// .concat(); //arr와 전달받은 파라미터들을 합쳐서 새로운 배열을 생성하여 리턴

const program = ['sbs', 'kbs', 'ytn', 'jtbc'];
programList();

const answer1 = question('다른 프로그램을 입력해주세요..');
const answer2 = question('원하는 위치를 입력해주세요..');

program.splice(answer2, 0, answer1);

programList();

//  리스트 출력
function programList() {
  for (let i = 0; i < program.length; i++) {
    console.log(i + '. ' + program[i]);
  }
}
