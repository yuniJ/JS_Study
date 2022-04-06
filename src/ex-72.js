import { question } from 'readline-sync';
// 문제 072
// 교과목 여섯 개가 담긴 배열을 생성하라.
// 이들 중 사용자가 좋아하지 않는 과목을 묻고
// 그 과목을 배열에서 삭제한 후에 배열을 다시 출력하라.

// arr.pop(); // 배열의 마지막 요소를 제거
// arr.shift(); // 배열의 첫번째 요소를 제거
// arr.splice(2, 1); // index 2 부터 1개의 요소('c')를 제거
// delete arr[1]; // delete로 배열을 삭제할 경우 요소는 그대로 존재하며 값만 삭제 됨

const subject = [
  'mathematics',
  'Science',
  'Literature',
  'English',
  'art',
  'Music',
];
for (const subjectIndex of subject) {
  console.log(subjectIndex);
}

const answer = question('좋아하지 않는 과목을 입력해주세요.. ');
const result = answer;
for (const [i, element] of subject.entries()) {
  if (element === result) subject.splice(i, 1);
}

for (const subjectIndex of subject) {
  console.log(subjectIndex);
}
