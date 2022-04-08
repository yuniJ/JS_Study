import { question } from 'readline-sync';
// 문제 076
// 사용자에게 파티에 초대할 사람 3명의 이름을 입력하라고 요청하고 배열에 저장한다.
// 모든 이름이 입력되면 추가할 사람이 있는지 묻는다.
// 만약 그렇다면 "n"이라고 답할 때까지 이름을 추가하게 한다.
// "n"이라고 입력하면 파티에 초대한 사람이 몇 명인지 표시하라.

// arr.pop(); // 배열의 마지막 요소를 제거
// arr.shift(); // 배열의 첫번째 요소를 제거
// arr.splice(2, 1); // index 2 부터 1개의 요소('c')를 제거
// delete arr[1]; // delete로 배열을 삭제할 경우 요소는 그대로 존재하며 값만 삭제 됨
// .split(" "); //문자열을 일정한 구분자로 잘라서 배열로 저장
// .concat(); //arr와 전달받은 파라미터들을 합쳐서 새로운 배열을 생성하여 리턴

// let inviteAll = [];

const answer = question('파티에 초대할 사람 3명의 이름을 입력해주세요..');
let invite = answer.split(' ');

let booleanFlag = true;

while (booleanFlag) {
  const answer2 = question(
    '\n추가할 사람이 있나요? 있다면 이름을 추가해주시고, 없다면 N 로 대답해주세요..'
  );
  if (answer2 === 'N') {
    booleanFlag = false;
    console.log('파티에 초대한 사람은 총 ' + invite.length + '명 입니다.');
  } else {
    invite = invite.concat(answer2.split(' '));
  }
}

for (let i = 0; i < invite.length; i++) {
  console.log(invite[i]);
}
