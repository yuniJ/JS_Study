import { question } from 'readline-sync';
// 문제 073
// 사용자에게 좋아하는 음식 네 개를 입력하도록 요청하고
//그것들은 인덱스 번호 1부터 시작하는 객체에 저장한다.
// 인덱스 번호와 항목이 모두 표시되도록 객체를 출력한다.
// 사용자에게 제거하고 싶은 항목을 묻고 그것을 제거한다.
// 남아 있는 데이터를 정렬하고 객체를 다시 출력하라.

// arr.pop(); // 배열의 마지막 요소를 제거
// arr.shift(); // 배열의 첫번째 요소를 제거
// arr.splice(2, 1); // index 2 부터 1개의 요소('c')를 제거
// delete arr[1]; // delete로 배열을 삭제할 경우 요소는 그대로 존재하며 값만 삭제 됨
// .split(" "); //문자열을 일정한 구분자로 잘라서 배열로 저장

const answer1 = question('좋아하는 음식을 4개 입력해주세요.. ');
const favoriteFood = answer1.split(' ');

// foodList();

for (let i = 0; i < favoriteFood.length; i++) {
  console.log(i + 1 + '. ' + favoriteFood[i]);
}

const answer2 = question('삭제하고 싶은 음식을 입력해주세요.. ');
const result = answer2;

for (let i = 0; i < favoriteFood.length; i++) {
  if (favoriteFood[i] === result) favoriteFood.splice(i, 1);
  console.log(i + 1 + '. ' + favoriteFood[i]);
}

// function foodList() {
//   for (let i = 0; i < favoriteFood.length; i++) {
//     console.log(i + 1 + '. ' + favoriteFood[i]);
//   }
// }
