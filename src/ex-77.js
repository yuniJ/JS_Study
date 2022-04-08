import { question } from 'readline-sync';
// 문제 077
// 76번 프로그램을 수정하여 초대할 사람들의 이름이 배열에 모두 추가되면
// 전체 명단을 출력하고 배열에 있는 이름들 중 하나를 입력하라고 요청한다.
// 입력된 이름의 위치(인덱스)를 출력하고
// 그 사람을 정말로 파티에 초대할 것인지를 묻는다.
// 만약 "n"이라고 답하면 그 항목을 배열서 삭제하고 배열을 다시 출력한다.

// arr.pop(); // 배열의 마지막 요소를 제거
// arr.shift(); // 배열의 첫번째 요소를 제거
// arr.splice(2, 1); // index 2 부터 1개의 요소('c')를 제거
// delete arr[1]; // delete로 배열을 삭제할 경우 요소는 그대로 존재하며 값만 삭제 됨
// .split(" "); //문자열을 일정한 구분자로 잘라서 배열로 저장
// .concat(); //arr와 전달받은 파라미터들을 합쳐서 새로운 배열을 생성하여 리턴

const answer = question('파티에 초대할 사람의 이름을 입력해주세요..');
let invite = answer.split(' ');

let booleanFlag = true;

while (booleanFlag) {
  const answer2 = question(
    '\n추가할 사람이 있나요? 있다면 이름을 추가해주시고, 없다면 N 로 대답해주세요..'
  );
  if (answer2 === 'N') {
    booleanFlag = false;
    inviteList();
    removeInviteList();
    inviteList();
  } else {
    invite = invite.concat(answer2.split(' '));
  }
}

// 초대인원 리스트 출력
function inviteList() {
  for (let i = 0; i < invite.length; i++) {
    console.log(invite[i] + '  ' + i);
  }
}

// 초대인원 삭제
function removeInviteList() {
  const answer3 = question('초대 이름 중에 하나를 입력해주세요..');

  for (let i = 0; i < invite.length; i++) {
    if (answer3 === invite[i]) {
      console.log('입력된 이름의 위치 : ' + i);
      const answer4 = question(
        '이 ' + answer3 + '을 정말로 초대하시겠습니까?..'
      );

      if (answer4 === 'n') invite.splice([i], 1);
    }
  }
}
