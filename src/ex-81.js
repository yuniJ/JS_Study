import { question } from 'readline-sync';
// 문제 081
// 가장 좋아하는 과목 이름을 입력받고 각 문자 뒤에 '-'를 붙여서 출력하라.

// string.length

const subject = question('가장 좋아하는 과목 이름을 입력해주세요..');
const subjectArray = subject.split('');
let result = '';

for (let i = 0; i < subjectArray.length; i++) {
  result += subjectArray[i] + '-';
}

console.log(result);
