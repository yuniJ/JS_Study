import { question } from 'readline-sync';

// 문제 14
// 사용자에게 10과 20(포함) 사이 의 숫자를 입력하라고 요청한다.
// 만약 입력한 값이 이 범위 안의 숫자이면 "Thank you"라는 메시지를 출력하라.
// 그렇지 않다면 "Incorrect answer"라는 메시지를 출력하라.

const Number = question('10과 20(포함) 사이 의 숫자를 입력해주세요...');
let output = '';

output = Number > 10 && Number <= 20 ? 'Thank you' : 'Incorrect answer';

// if (Number > 10 && Number <= 20) {
//   output = 'Thank you';
// } else {
//   output = 'Incorrect answer';
// }

console.log(output);
