import { question } from 'readline-sync';

// 문제 7
// 사용자로부터 이름과 나이를 입력 받아서 나이에 1을 더한 후 다음과 같이 출력하라.
// [이름] next birthday you will be [새로운 나이]

// 사용자 이름, 나이 받기 string
// 변수 2개 저장  number 변환
// 나이 + 1
// 결과 출력 [이름] next birthday you will be [새로운 나이]

// 타입변환 함수 Number(), String()

const userName = question('이름을 입력해주세요...');
const userAge = question('나이를 입력해주세요...');

const userAgeNextYear = Number(userAge) + 1;

const output = userName + ' next birthday you will be ' + userAgeNextYear;

console.log(output);
