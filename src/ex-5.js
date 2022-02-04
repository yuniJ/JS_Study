import { question } from 'readline-sync';

// 문제 5
// 사용자로부터 3개의 숫자를 입력받는다.
// 첫번째 숫자와 두번째 숫자를 더한 값에
// 세번째 숫자를 곱한 결과를 다음과 같이 출력하라.
// The answer is [결과]

// 사용자 숫자값 3개 받기 string
// 변수 3개 저장  number 변환   계산 순서 주의!
// The answer is [결과]

// 타입변환 함수 Number(), String()

const number1 = question('첫번째 숫자를 입력해주세요...');
const number2 = question('두번째 숫자를 입력해주세요...');
const number3 = question('세번째 숫자를 입력해주세요...');

const result = (Number(number1) + Number(number2)) * Number(number3);

const output = result;

console.log(output);
