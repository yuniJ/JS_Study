import { question } from 'readline-sync';
// 문제 043
// 사용자에게 원하는 카운트 방향(카운트 다운 또는 카운트 업)을 묻는다.
// 만약 업을 선택하면 가장 큰 숫자를 묻고 1부터 그 숫자까지 출력하라.
// 다운을 선택하면 20 미만의 숫자를 요청하고 20부터 그 숫자까지 출력하라.
// 업 또는 다운이 아닌 다른 것을 선택하면 "I don't understand"를 출력하라.

const number = question('1)카운트 다운, 2)카운트 업 번호를 선택해주세요');

if (number === '2') {
  const countUp = question('카운트업 할 숫자를 입력해주세요... ');
  for (let i = 0; i < countUp; i++) {
    console.log(i + 1);
  }
} else if (number === '1') {
  const countDown = question('카운트다운 할 20 미만의 숫자를 입력해주세요... ');
  for (let i = 20; i >= countDown; i--) {
    console.log(i);
  }
} else {
  console.log("I don't understand");
}
