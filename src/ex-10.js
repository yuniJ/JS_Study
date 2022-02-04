import { question } from 'readline-sync';

// 문제 10
// 1킬로그램은 2.204 파운드다.
// 몸무게를 킬로그램 단위로 입력받아서 파운드로 변환하여 출력하라.

// 몸무게 입력받기
// 변수 저장
// 파운드 단위로 변환
//  출력

const weightKg = question('몸무게를 입력해주세요...');
const covertPound = Number(weightKg) * 2.204;
const result = covertPound + 'lb 입니다.';
console.log(result);
