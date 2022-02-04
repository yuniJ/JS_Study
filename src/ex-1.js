// 이름을 입력 받는다
// 변수에 이름을 저장한다
// 변수 앞에 hello 출력

import { question } from 'readline-sync';

const name = question('이름을 입력하세요...');
const output = 'Hello ' + name;

console.log(output);
