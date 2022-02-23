import { question } from 'readline-sync';

// 문제 24
// 사용자에게 아무 단어나 입력하라고 하고 그것을 대문자로 출력하라.

const text = question('영어로 과일을 입력해주세요! ... ');

console.log(text.toUpperCase());
