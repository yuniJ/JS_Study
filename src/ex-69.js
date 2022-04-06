import { question } from 'readline-sync';
// 문제 069
// 다섯 개의 국가 이름을 담고 있는 배열을 만들고 배열 전체를 출력하라.
// 표시된 국가 이름들 중 하나를 입력하라고 사용자에게 요청하고,
// 입력된 국가 이름의 인덱스 번호(즉, 목록에서의 위치)를 출력하라.

const country = ['Korea', 'Spain', 'Italy', 'Canada', 'France'];

for (const countryIndex of country) {
  console.log(countryIndex);
}

const answer = question('국가 이름들 중 하나를 입력해주세요.. ');
const result = answer;

for (let i = 0; i < country.length; i++) {
  if (country[i] === result) console.log(i);
}
