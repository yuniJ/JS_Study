import { question } from 'readline-sync';

// 문제 11
// 사용자로부터 100이 넘는 숫자를 입력받고
// 10 미만의 숫자 하나를 입력받은 후,
// 작은 숫자가 큰 숫자 안에 몇번 들어가는지
// 사용자 친화적인 형식으로 출력하라.

// 사용자 숫자 입력받기
// 변수 2개저장
// 같은 숫자(string)  문자열 확인
// 출력

const maxNumber = question('100이 넘는 숫자를 입력해주세요...');
const minNumber = question('10 미만의 숫자를 입력해주세요...');

const result = maxNumber.split(minNumber).length - 1;
const output = '작은 숫자가 큰 숫자 안에 "' + result + '번" 반복됩니다.';

console.log(output);
