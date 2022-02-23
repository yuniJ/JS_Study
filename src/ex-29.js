import { question } from 'readline-sync';

// 문제 29
// 사용자에게 500 이상의 정수를 입력하라고 요청한다.
// 입력받은 숫자의 제곱근을 구하고 소수점 둘째자리까지 출력하라.

// Math.sqrt() : 주어진 숫자에 루트(√ ), 음수이면 NaN를 반환
// Math.pow(base, exponent) : base의 exponent 곱, base와 exponent는 10진수

const number = question('500 이상의 정수를 입력해주세요! ... ');
const result = Math.sqrt(number).toFixed(2);
console.log(result);
