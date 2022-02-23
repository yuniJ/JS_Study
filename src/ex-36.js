import { question } from 'readline-sync';
// 문제 036
// 035번 프로그램을 수정하여 사용자가 이름과 숫자를 입력하게 하여,
// 이름을 입력한 숫자만큼 출력하라.

const userName = question('영어로 이름을 입력해주세요... \n');
const number = question('숫자를 입력해주세요... \n');

for (let i = 0; i < number; i++) {
  console.log(userName);
}
