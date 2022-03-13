import { question } from 'readline-sync';
// 문제 056
// 1과 10 사이의 정수를 임의로 선택한다.
// 사용자에게 숫자를 입력하라고 요청하고
// 임의로 선택한 숫자를 입력할 때까지
// 계속 숫자를 입력하게 하라.

const randomNumber = Math.random() * 10 + 1;
const result = Math.floor(randomNumber);

const chooseCopper = question('숫자를 선택해주세요.. ');
let total = Number(chooseCopper);
let state = true;

while (state) {
  if (total === result) {
    state = false;
  } else {
    console.log(result);
    const chooseCopperAgain = question('다시 숫자를 선택해주세요.. ');
    total = Number(chooseCopperAgain);
  }
}
