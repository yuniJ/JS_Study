import { question } from 'readline-sync';
// 문제 057
// 056번 프로그램을 업데이트하여
// 사용자가 입력한 숫자가 큰지 작은지를 알려주고
// 다시 숫자를 고르게 하라.

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
    if (total < result) {
      console.log('Too low');
    } else if (total > result) {
      console.log('Too high');
    }
  }
}
