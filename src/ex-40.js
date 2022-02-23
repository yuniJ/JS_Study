import { question } from 'readline-sync';
// 문제 040
// 50 미만의 숫자를 입력하도록 요청한다.
// 50부터 입력한 숫자까지 카운트 다운하면서 숫자를 출력하되,
//입력한 숫자까지 출력 되도록 하라.

const number = question('50 미만의 숫자를 입력해주세요...');

for (let i = number; i > 0; i--) {
  console.log(i);
}
