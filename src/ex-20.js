import { question } from 'readline-sync';

// 문제 20
// 사용자에게 이름을 요청하고 그 이름의 길이를 출력하라.

const userName = question('이름을 입력해주세요! ... ');
const output = userName.length;

console.log(output);
