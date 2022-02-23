import { question } from 'readline-sync';

// 문제 16
// 사용자에게 지금 비가 오는지 묻고 그 대답을 소문자로 변환하여 대소문자 상관없도록 한다.
// 만약 "yes"라고 입력한다면 바람이 부는지 묻는다.
// 두 번째 질문에 대해 "yes"라고 입력하면 "It is too windy for an umbrella" 라는 메시지를 표시하라.
// 그렇지 않다면 "Take an umbrella"라는 메시지를 표시하라.
// 만약 첫 번째 질문에 대해 "yes"라고 입력하지 않는다면 "Enjoy your day"라는 메시지를 표시하라.

// .toLowerCase(): 소문자 변환
// .toUpperCase() : 대문자 변환
// .trim() : 공백제거

// 논리연산자 && : 모두참
// 논리연산자 || : 조건중 한가지만 만족해도 참
// 논리연산자 ! : not

const question1 = question('Is it raining right now?');
let output = '';

if (question1.toLowerCase() === 'yes') {
  const question2 = question('Is it windy?');
  output =
    question2.toLowerCase() === 'yes'
      ? 'It is too windy for an umbrella'
      : 'Take an umbrella';
} else {
  output = 'Enjoy your day';
}

console.log(output);
