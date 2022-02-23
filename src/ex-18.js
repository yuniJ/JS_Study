import { question } from 'readline-sync';

// 문제 18
// 사용자에게 숫자를 입력하라고 요청하자. 만약 10 미만이면 "Too low"라는 메시지를 표시하라.
// 만약 입력한 숫자가 10에서 20 사이라면 "Correct" 라고 표시하라.
// 그렇지 않다면 "Too high"라고 표시하라.

// 논리연산자 && : 모두참
// 논리연산자 || : 조건중 한가지만 만족해도 참
// 논리연산자 ! : not

const Number = question('숫자를 입력해주세요! ... ');
let output = '';

if (Number < 10) {
  output = 'Too low';
} else if (Number >= 10 && Number <= 20) {
  output = 'Correct';
}

console.log(output);
