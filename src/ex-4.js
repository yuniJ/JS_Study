import { question } from 'readline-sync';

// 문제 4
// 사용자로부터 2개의 숫자를 입력 받아서 더한 결과를 다음과 같이 출력하라
// The total is [결과]

// 사용자 숫자값 받기 string
// 변수 2개 저장  number 변환
// The total is +  합계결과 출력

// 타입변환 함수 Number(), String()

const number1 = question('첫번째 숫자를 입력해주세요...');
const number2 = question('두번째 숫자를 입력해주세요...');

const result = Number(number1) + Number(number2);

const output = result;

console.log(output);
