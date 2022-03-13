import { question } from 'readline-sync';
// 문제 048
// 사용자가 파티에 초대하고 싶은 사람의 이름을 입력하라고 요청 한다.
// 그 다음에, "[이름] has now been invited"라는 메시지를 출력하고

// 카운트에 1을 더한다.
// 다른 사람을 더 초대하고 싶은 지를 묻고
// 더 이상 파티에 초대하고 싶은 사람이 없을 때까지 반복한다.
// 초대하고 싶은 사람이 없다면 몇 명이 파티에 참석하는지를 표시하라.

let person = 0;
let result = true;

while (result) {
  const inviteFriend = question(
    '파티에 초대하고 싶은 사람의 이름을 입력해주세요.. '
  );
  console.log(inviteFriend + ' has now been invited');
  person += 1;

  const addFriend = question(
    '다른 사람을 더 초대하고 싶으신가요? y,n 으로 대답해주세요.'
  );

  if (addFriend !== 'y') {
    result = false;
  }
}

console.log('최종 초대인원은 ' + person + '3 명 입니다.');
