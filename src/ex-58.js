import { question } from 'readline-sync';
// 문제 058
// 임의로 생성된 두 개의 정수를 더하는 다섯 개의 질문
// (즉, [숫자1] + [숫자2])이 나오는 수학 퀴즈를 만들자.
// 사용자에게 답을 입력하라고 요청하고
// 정답을 맞히면 점수를 증가하라.
// 퀴즈가 끝나면
// 다섯 문제 중에 몇 개를 맞혔는지 출력하라.

function randomNumber() {
  const number = Math.random() * 10 + 1;
  const resultNumber = Math.floor(number);
  return resultNumber;
}

let score = 0;
let correctAnswer = 0;

for (let index = 0; index < 5; index++) {
  const number1 = randomNumber();
  const number2 = randomNumber();
  console.log(number1 + '+' + number2 + '= ?');

  const sum = number1 + number2;

  const answer = question('정답을 작성해주세요.. ');
  const total = Number(answer);
  if (total === sum) {
    score += 10;
    correctAnswer++;
    console.log('\n문제를 맞췄습니다. score : ' + score + '점\n');
  }
}

console.log(
  '\n5문제 중 ' +
    correctAnswer +
    '문제를 맞췄습니다. 최종 score : ' +
    score +
    '점'
);
