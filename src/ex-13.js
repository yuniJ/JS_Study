import { question } from 'readline-sync';

// 문제 13
// 사용자에게 20보다 작은 숫자를 입력하라고 요청한다.
// 만약 입력된 값이 20과 같거나 크면 "Too high"라는 메시지를 출력하라.
// 그렇지 않다면 "Thank you"를 출력하라.

const Number = question('20보다 작은 숫자를 입력해주세요...');
let output = '';

output = Number >= 20 ? 'Too high' : 'Thank you';

// if (Number >= 20) {
//   output = 'Too high';
// } else {
//   output = 'Thank you';
// }

console.log(output);
