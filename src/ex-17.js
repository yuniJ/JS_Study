import { question } from 'readline-sync';

// 문제 17
// 사용자의 나이를 묻자.
// 만약 18세 이상이면 "You can vote"라는 메시지를 표시하라.
// 만약 17세라면 "You can learn to drive"2 는 메시지를 표시하라.
// 만약 16세 라면 "You can buy a lottery ticket"이라는 메시지를 표시하라.
// 만약 16세 미만이라면 "You can go Trick-or-Treating"이라는 메시지를 표시하라.

const userInfo = question('How old are you?');
let output = '';

if (userInfo >= 18) {
  output = 'You can vote';
} else if (userInfo === '17') {
  output = 'You can learn to drive';
} else if (userInfo === '16') {
  output = 'You can buy a lottery ticket';
} else {
  output = 'You can go Trick-or-Treating';
}

console.log(output);
