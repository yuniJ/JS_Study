import { question } from 'readline-sync';

// 문제 23
// 사용자에게 자장가의 첫 줄을 입력하라고 요청하고 그 문자열의 길이를 출력한다.
// 사용자에게 범위를 시작할 인덱스 번호를 묻고 범위의 끝 인덱스 번호를 묻는다.
// 그런 후에 그 범위의 텍스트를 출력하라.
// 자바스크립트에서 인덱스는 1이 아닌 0부터 시작한다는 것을 기억하자.

// charAt(prams) : index 위치 글자 반환
// substr(start, length) : start index부터 length만큼 반환
// substring(start, length) : start index부터 잘라냄, 잘라내려는 문자열 마지막 index
// slice() : 어떤 배열의 begin부터 end까지(end 미포함)를 새로운 배열 객체로 반환

const text = question('자장가의 첫 줄을 입력해주세요! ... ');
const textLength = text.length; // 길이출력
console.log(textLength);

const textNameStart = question('가사 시작할 인덱스를 입력해주세요! ... ');
const textNameEnd = question('가사 끝날 인덱스를 입력해주세요! ... ');

const userText = text.substr(Number(textNameStart), Number(textNameEnd));

console.log(userText);
