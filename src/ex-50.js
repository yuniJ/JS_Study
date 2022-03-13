import { question } from 'readline-sync';
// 문제 050
// 사용자에게 10과 20 사이의 숫자를 입력하라고 요청한다.
// 입력한 숫자가 10 이하이면
// "Too low"라는 메시지를 출력하고
// 다시 입력하라고 요청한다.
// 만약 20 이상이면
// "Too high" 라는 메시지를 출력하고
// 다시 입력하라고 요청한다.
// 사용자가 10과 20 사이의 값을 입력할 때까지 이 과정을 반복하고,
// 10과 20 사이의 값을 입력하면 "Thank you" 라는 메시지를 출력하라.

const questionNumber = question('10과 20 사이의 숫자를 입력해주세요.. ');
let total = Number(questionNumber);
let result = true;

while (result) {
  if (total <= 10) {
    qustionReplay('Too low');
  } else if (total >= 20) {
    qustionReplay('Too high');
  }

  if (total > 10 && total < 20) {
    console.log('Thank you');
    result = false;
  }
}

function qustionReplay(text) {
  console.log(text);
  const questionAgain = question('다시 입력해주세요.. ');
  total = questionAgain;
}
