import { question } from 'readline-sync';
// 문제 035
// 사용자의 이름을 입력하라고 요청한 뒤, 그 이름을 세 번 출력하라.

const userName = question('이름을 입력해주세요... ');

for (let i = 0; i < 3; i++) {
  console.log(userName);
}
