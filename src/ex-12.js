import { question } from 'readline-sync';

// 문제 12
// 두 개의 숫자를 입력받는다.
// 만약 첫 번째 숫자가 두 번째 숫자보다 크면, 두 번째 숫자를 출력하라.
// 그렇지 않다면 첫 번째 숫자를 출력한 다음에 두 번째 숫자를 출력하라.

const firstNumber = question('첫 번째 숫자를 입력해주세요...');
const secondNumber = question('두 번째 숫자를 입력해주세요...');
let output = '';

output =
  firstNumber > secondNumber ? secondNumber : firstNumber + ', ' + secondNumber;

// if (firstNumber > secondNumber) {
//   output = secondNumber;
// } else {
//   output = firstNumber + ', ' + secondNumber;
// }

console.log(output);
