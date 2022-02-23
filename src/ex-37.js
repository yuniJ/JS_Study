import { question } from 'readline-sync';
// 문제 037
// 사용자의 이름을 입력하라고 요청하고,
// 그 이름의 각 문자를 한 줄에 하나씩 출력하라.

const userName = question('영어로 이름을 입력해주세요...');
for (let i = 0; i < userName.length; i++) {
  console.log(userName.substr(i, 1));
}
