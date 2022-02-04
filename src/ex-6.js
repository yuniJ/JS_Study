import { question } from 'readline-sync';

// 문제 6
// 사용자로부터 처음에 가지고 있었던 피자 조각 수를 입력받고,
// 몇 조각을 먹었는지 입력받아서 남은 조각 수를 계산하여
// 사람에게 익숙한 형식으로 출력하라.

// 사용자 피자 수, 먹은 수 받기 string
// 변수 2개 저장  number 변환   계산 뺄셈!
// 결과 출력

// 타입변환 함수 Number(), String()

const number1 = question('피자 조각은 몇 개입니까?...');
const number2 = question('몇 개의 피자 조각을 먹었습니까?...');

const result = Number(number1) - Number(number2);

const output = '피자 조각은 총 ' + result + '개 남았습니다.';

console.log(output);
