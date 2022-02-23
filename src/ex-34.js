import { question } from 'readline-sync';
// 문제 034
// 다음과 같은 메시지를 표시한다.
// 1) Square
// 2) Triangle

// Enter a number:
// 만약 사용자가 1을 입력하면 한 면의 길이를 요청하여 사각형의 넓이를 구하여 출력하라.
// 만약 2를 입력하면 밑변과 높이를 요청하여 삼각형의 넓이를 구하여 출력 하라.
// 다른 것을 입력하면 적절한 오류 메시지가 출력 되도록 한다.

const question1 = question(
  '두 번호중 한 숫자를 선택해주세요 \n1) Square \n2) Triangle \n'
);
let result;
if (question1 === '1') {
  const square = question('사각형의 한 면의 길이 입력해주세요.. ');
  result = '사각형의 넓이 : ' + square ** 2;
} else if (question1 === '2') {
  const Triangle1 = question('삼각형의 밑변 길이 입력해주세요.. ');
  const TriangleHeight = question('삼각형의 높이 입력해주세요.. ');
  result = '삼각형의 넓이 : ' + Triangle1 * TriangleHeight * 0.5;
} else {
  result = '입력 에러..... ';
}

console.log(result);
