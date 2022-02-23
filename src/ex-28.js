import { question } from 'readline-sync';

// 문제 28
// 027번 프로그램을 업데이트하여 소수점 둘째 자리까지 출력하라.

// Math.ceil() : 소수점 올림
// Math.floor() : 소수점 버림
// Math.round() : 소수점 반올림
// toFixed(0) : 숫자 문자열로 변환, 지정된 소수점 이하 숫자를 반올림 출력

const text = question('소수점 이하 자릿수를 많이 입력해주세요! ... ');
const result = text * 2;
console.log(result);
const udateResult = result.toFixed(2);
console.log(udateResult);
