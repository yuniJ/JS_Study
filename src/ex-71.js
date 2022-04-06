import { question } from 'readline-sync';
// 문제 071
// 두 개의 스포츠 이름을 담고 있는 배열을 생성하라.
// 사용자에게 좋아하는 스포츠가 무엇인지 물어보고 그것을 배열 끝에 추가하라.
// 배열을 정렬하고 출력하라.

const sports = ['swimming', 'fencing'];

const answer = question('좋아하는 스포츠를 입력해주세요.. ');
const result = answer;
sports.push(result);

for (const sportsIndex of sports) {
  console.log(sportsIndex);
}
