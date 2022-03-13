import { question } from 'readline-sync';
// 문제 059
// 다섯 개의 색상을 표시하고
// 그들 중 하나를 사용자에게 선택하라고 요청한다.
// 만약 프로그램이 선택한 것과 동일하면 "Well done"이라고 출력하고,
// 그렇지 않다면 컴퓨터가 선택한 색상이 포함된 위트 있는 문장을 출력하라.
// 예: "I bet you are GREEN with envy" 또는 "You are probably feeling BLUE right now".
// 다시 맞혀 보라고 사용자에게 색상을 입력하라고 한다.
// 사용자가 맞힐 때까지 이 작업을 반복한다.

const color = ['white', 'black', 'green', 'yellow', 'blue'];

function randomNumber() {
  const colorPosition = Math.random() * color.length;
  const resultNumber = Math.floor(colorPosition);
  return color[resultNumber];
}

for (const colorIndex of color) {
  console.log(colorIndex);
}

const answer = question('색을 선택해주세요.. ');
let boolean = true;
let result = answer;
const correct = randomNumber();
while (boolean) {
  if (result === correct) {
    console.log('Well done');
    boolean = false;
  } else {
    console.log('You are probably feeling ' + correct + ' right now');
    const answerAgain = question('다시 색을 선택해주세요.. ');
    result = answerAgain;
  }
}
