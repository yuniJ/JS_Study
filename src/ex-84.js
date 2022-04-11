import { question } from 'readline-sync';
// 문제 084
// 사용자에게 영어 단어를 입력하라고 요청한다.
// 처음 두 개의 문자만 대문자로 출력하라.

const word = question('영어 단어를 입력해주세요..');

const wordArray = word.split('');
let result = '';
console.log(wordArray);
for (let i = 0; i < wordArray.length; i++) {
  if (i < 2) {
    result += wordArray[i].toUpperCase();
  } else {
    result += wordArray[i];
  }
}
console.log(result);
