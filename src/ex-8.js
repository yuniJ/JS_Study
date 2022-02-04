import { question } from 'readline-sync';

// 문제 8
// 계산서의 총 가격과 몇 명이 같이 식사를 했는지 입력받는다.
// 총 가격을 인원수로 나누고 각 사람이 얼마씩 내야 하는지 출력하라.

// 계산서 총 값, 참여 수 string
// 변수 2개 저장  number 변환
// 나누기!
// 결과 출력

// 타입변환 함수 Number(), String()
// .toLocaleString([locales[, [options]])
// 정규식: .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const totalPrice = question('오늘 점심식사 가격은 총 얼마인가요?...');
const people = question('몇명이서 식사하셨나요?...');

const Amount = Number(totalPrice) / Number(people);
const result = priceToString(Amount);
// = Amount.toLocaleString('ko-KR', {
//   style: 'currency',
//   currency: 'KRW',
// });
const output = '각 ' + result + '원씩 계산해주세요';

function priceToString(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

console.log(output);
