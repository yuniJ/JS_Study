import { question } from 'readline-sync';
// 문제 070
// 사용자에게 숫자를 입력하라고 요청하고,
// 입력한 위치의 국가 이름이 출력되는 기능을 069번 프로그램에 추가하라.

const country = ['Korea', 'Spain', 'Italy', 'Canada', 'France'];

const answer = question('0 ~ 4 중 숫자를 입력해주세요.. ');
const result = answer;
console.log(country[result]);
