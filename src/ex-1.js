// 문제 1 : src/ex-1.js

// 사용자의 이름을 입력 받아서 다음과 같이 출력하라.
// Hello [이름]

// 이름을 입력 받는다
// 변수에 이름을 저장한다
// 변수 앞에 hello 출력

import { question } from 'readline-sync';

const name = question('이름을 입력하세요...');
const output = 'Hello ' + name;

console.log(output);
