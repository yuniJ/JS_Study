import { question } from 'readline-sync';
// 문제 038
// 037번 프로그램을 수정하여 숫자도 입력하도록 요청하자.
// 이름의 각 문자를 한 줄에 하나씩 출력하는 작업을 입력한 숫자만 큼 반복하라.

const userName = question('영어로 이름을 입력해주세요...');
const number = question('숫자를 입력해주세요...');

for (let i = 0; i < userName.length; i++) {
  for (let index = 0; index < number; index++) {
    console.log(userName.substr(i, 1));
  }
}
