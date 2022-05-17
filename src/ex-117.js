import fs from 'fs';
import { question } from 'readline-sync';

import { Parser } from 'json2csv';

// 문제 117
// 사용자의 이름을 묻는다.
// 두 개의 수(1부터 100까지)를 입력 받아 두 수를 더하는 퀴즈를 만들어 출력하고 답을 입력받는다.
// 총 2개의 문제를 입력받고, 답을 맞추면 점수를 +1 한다.
// 사용자의 이름과 질문, 답변 그리고 최종 점수를 csv 파일에 저장한다.
// 프로그램이 실행될 때마다 csv 파일에 추가되며 덮어쓰지 않는다.

const newFile = './src/quiz.csv';
let quizData = [];

quiz();
function quiz() {
  const userName = question('사용자의 이름을 입력해주세요...');
  let score = 0;

  for (let index = 0; index < 2; index++) {
    let obj = {
      userName: '',
      score: '',
      number1: '',
      number2: '',
      answer: '',
    };

    obj['userName'] = userName;
    obj['score'] = score;

    const userNumber = question('1 ~ 100까지 두개의 수를 입력해주세요...');
    const numberArray = userNumber.split(' ');
    const correctAnswer = Number(numberArray[0]) + Number(numberArray[1]);

    console.log(numberArray[0] + '+' + numberArray[1] + '= ?');

    const userAnswer = question('위 문제의 정답을 입력해주세요...');

    obj['number1'] = Number(numberArray[0]);
    obj['number2'] = Number(numberArray[1]);
    obj['answer'] = Number(userAnswer);

    if (Number(userAnswer) === correctAnswer) {
      console.log('correct answer');
      score++;
      obj['score'] = score;
    } else {
      console.log("it's wrong");
    }

    quizData.push(obj);
  }

  console.log(quizData);
  return quizData;
}

const json2csvParser = new Parser();
const csvFile = json2csvParser.parse(quizData);

console.log(csvFile);

// 파일 생성
fs.open(newFile, 'a+', function (error) {
  if (error) throw error;
});

// 파일 이어쓰기
fs.appendFile(newFile, csvFile, function (error) {
  if (error) throw error;
});
// function writeData(csvFile) {
// }
