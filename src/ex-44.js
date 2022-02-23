import { question } from 'readline-sync';
// 문제 044
// 파티에 몇 명을 초대하고 싶은지를 묻는다.
// 만약 10 미만을 입력하면 이름을 묻고
// "[이름] has been invited"라고 출력하는 것을
// 입력한 숫자만큼 반복하라.
// 10 이상을 입력하면
// "Too many people"이 라는 메시지를 출력하라.

const number = question('파티에 몇 명을 초대하나요??? ');

if (Number(number) < 10) {
  const userName = question('주최자 이름을 영문으로 입력해주세요... ');
  for (let i = 0; i < number; i++) {
    console.log(userName + 'has been invited');
  }
} else {
  console.log('Too many people');
}
