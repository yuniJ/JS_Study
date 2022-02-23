import { question } from 'readline-sync';

// 문제 2
// 사용자에게 이름과 성을 소문자로 입력하라고 요청한다.
// 각 첫 문자만 대문자로 변경하고 이름과 성 사이에 공백을 하나 두어 결합한 후에 그 결과를 출력하라.
// charAt(prams) : index 위치 글자 반환
// substr(start, length) : start index부터 length만큼 반환
// substring(start, length) : start index부터 잘라냄, 잘라내려는 문자열 마지막 index
// slice() : 어떤 배열의 begin부터 end까지(end 미포함)를 새로운 배열 객체로 반환

const userFirstName = question('이름을 영어 소문자로 입력해주세요! ... ');
const userFamilyName = question('성을 영어 소문자로 입력해주세요! ... ');

const firstNameLength = userFirstName.length;
const familyNameLength = userFamilyName.length;

const userFullName =
  userFirstName.charAt(0).toUpperCase() +
  userFirstName.slice(1, firstNameLength) +
  ' ' +
  userFamilyName.charAt(0).toUpperCase() +
  userFamilyName.slice(1, familyNameLength);

console.log(userFullName);
