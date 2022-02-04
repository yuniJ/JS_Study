import { question } from 'readline-sync';

// 문제 9
// 사용자로부터 일수(날짜 수)를 입력 받아서 그 일수까지 몇 시간, 몇 분, 몇 초가 남았는지 출력하라.

// 날짜 입력받기
// 변수 현재시간, d-day 날짜
// 빼기? : 1000분의 1초 단위로 표시
// 몇 시간, 몇 분, 몇 초가 남았는지 출력

// .getTime() : 날짜를 숫자값으로 변환
// .getMonth() : 월 값, 0부터 시작, 0=1월
// Math.ceil()  :  올림
// Math.floor() : 내림
// Math.round()  :  반올림

const date = question('d-day 날짜를 0000-00-00 형식으로 입력해주세요...');

const dDay = new Date(date);

const currentDay = new Date();
const resultTime = dDay.getTime() - currentDay.getTime();

const day = Math.floor(resultTime / (1000 * 60 * 60 * 24));
const hours = Math.floor(
  (resultTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
const minutes = Math.floor((resultTime % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((resultTime % (1000 * 60)) / 1000);

const output = day + '일 ' + hours + '시간 ' + minutes + '분 ' + seconds + '초';

console.log(output);
