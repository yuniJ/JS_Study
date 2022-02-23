import { question } from 'readline-sync';

// 문제 27
// 사용자에게 소수점 이하 자릿수가 많은 숫자를 입력 하도록 요청한다.
// 이 숫자에 2를 곱한 결과를 출력하라.

const text = question('소수점 이하 자릿수를 많이 입력해주세요! ... ');
const result = text * 2;

console.log(result);
