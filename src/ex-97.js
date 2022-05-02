import { question } from 'readline-sync';
// 문제 097
// 사용자에게 행과 열을 선택하라고 요청하고,
// 096번 프로그램의 2차원 배열을 이용하여 해당 값을 출력하라.

const row = question('행을 입력해주세요..');
const columm = question('열을 입력해주세요..');

const array = [
  [2, 5, 8],
  [3, 7, 4],
  [1, 6, 9],
  [4, 2, 0],
];

console.log(array[row][columm]);
