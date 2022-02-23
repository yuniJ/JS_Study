import { question } from 'readline-sync';

// 문제 19
// 사용자에게 1이나 2 또는 3을 입력하라고 하자.
// 만약 1을 입력하면 "Thank you"라는 메시지를 표시하라.
// 만약 2를 입력하면 "well done"을 표시하라.
// 만약 3을 입력하면 "Correct"를 표시하라
// 만약 사용자가 다른 것을 입력하면 "Error message"를 표시하라.

// 논리연산자 && : 모두참
// 논리연산자 || : 조건중 한가지만 만족해도 참
// 논리연산자 ! : not

const Number = question('숫자1,2,3 중에 하나를 입력해주세요! ... ');
let output = '';

switch (Number) {
  case '1': {
    output = 'Thank you';
    break;
  }

  case '2': {
    output = 'well done';
    break;
  }

  case '3': {
    output = 'Correct';
    break;
  }

  default: {
    output = 'Error message';
  }
}

console.log(output);
