import { question } from 'readline-sync';

// 문제 15
// 사용자에게 좋아하는 색을 입력하라고 요청한다.
// 만약 "red" "RED" 또는 "Red" 를 입력하면 "I like red too"라는 메시지를 출력하라.
// 그렇지 않다면 "I don't like that colour, I prefer red"라는 메시지를 출력하라.

// .toLowerCase(): 소문자 변환
// .toUpperCase() : 대문자 변환
// .trim() : 공백제거

// 논리연산자 && : 모두참
// 논리연산자 || : 조건중 한가지만 만족해도 참
// 논리연산자 ! : not

const userInfo = question('좋아하는 색을 영어로 적어주세요.');
let output = '';

// 방법1
output =
  userInfo.toLowerCase() === 'red'
    ? 'I like red too'
    : "I don't like that color, I prefer red";
// if (userInfo.toLowerCase() === 'red') {
//   output = 'I like red too';
// } else {
//   output = "I don't like that color, I prefer red";
// }

// 방법2
// output =
//   userInfo === 'red' || userInfo === 'Red' || userInfo === 'RED'
//     ? 'I like red too'
//     : "I don't like that color, I prefer red";

console.log(output);
