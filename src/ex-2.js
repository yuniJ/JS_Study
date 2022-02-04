import { question } from 'readline-sync';

// 문제 2 : src/ex-2.js

// 사용자의 이름을 입력받은 다음, 사용자의 성을 입력받아서 다음과 같이 출력하라.
// Hello [이름] [성]

// 이름을 입력 받는다
// 성을 입력 받는다
// 변수에 이름을 저장한다
// 변수 앞에 hello 출력

const firstName = question('이름을 입력하세요...');
const SurName = question('성을 입력하세요...');

const output = 'Hello ' + firstName + ' ' + SurName;

console.log(output);
