import { question } from 'readline-sync';
// 문제 032
// 원기둥의 반지름과 깊이를 입력하도록 요청한다.
// 원기둥의 부피(원 넓이 * 깊이)를 구하고
// 결과를 반 올림하여 소수점 세째 자리까지 출력하라.

// Math.pow(base, exponent) : base의 exponent 곱, base와 exponent는 10진수
// Math.PI : π

const width = question('원기둥의 반지름 길이 입력해주세요! ... ');
const height = question('원기둥의 깊이를 입력해주세요! ... ');

const result = (width ** 2 * Math.PI * height).toFixed(3);

console.log(result);
