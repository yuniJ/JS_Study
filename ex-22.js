import { question } from 'readline-sync';

// 문제 2
// 사용자에게 이름과 성을 소문자로 입력하라고 요청한다.
// 각 첫 문자만 대문자로 변경하고 이름과 성 사이에 공백을 하나 두어 결합한 후에 그 결과를 출력하라.

const userFirstName = question('이름을 영어 소문자로 입력해주세요! ... ');
const userFamilyName = question('성을 영어 소문자로 입력해주세요! ... ');

let userFullName = userFirstName + ' ' + userFamilyName;
userFullName = userFullName.length;

console.log(userFullName);
