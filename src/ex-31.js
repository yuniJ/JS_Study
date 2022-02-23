import { question } from 'readline-sync';
// 문제 031
// 사용자에게 원의 반지름(원의 중심점으로부터 끝까지의 길이)을 입력하도 록 요청한다.
// 원의 넓이(π * 반지름의 2제곱)를 계산하여 출력하라

// Math.pow(base, exponent) : base의 exponent 곱, base와 exponent는 10진수
// Math.PI : π
const text = question('원의 반지름 길이를 입력해주세요! ... ');

const result = text ** 2 * Math.PI;
// const result = Math.pow(text, 2) * Math.PI;

console.log(result);
