import { question } from 'readline-sync';
// 문제 039
// 1부터 12 사이의 값을 입력하도록 요청한 뒤,
// 그 숫자에 대해 12까지의 곱셈표를 출력하라

const number = question('1부터 12 사이의 값을 입력해주세요...');

for (let i = 0; i < 12; i++) {
  console.log(number + ' X ' + (i + 1) + ' = ' + number * (i + 1));
}
