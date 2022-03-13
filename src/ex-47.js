import { question } from 'readline-sync';
// 문제 047
// 사용자에게 숫자를 입력하라고 요청한 다음에
// 다른 숫자를 입력하라고 하자.
// 두 숫자들을 더한 뒤,

// 또 다른 숫자를 더하고 싶은지 묻고
// "y" 라고 입력하면
// 다른 숫자를 입력받아 더하고

// 다시 같은 질문을 한다.
// "y"가 아닌 답을 하면 루프를 종료하고 총합을 출력하라.
const number1 = question('1번째 숫자를 입력해주세요 ');
const number2 = question('2번째 숫자를 입력해주세요 ');
let total = 0;
let num = 3;
let result = true;
total = Number(number1) + Number(number2);

while (result) {
  const questionNumber = question(
    '또 다른 숫자를 더하고 싶으신가요? y,n 으로 대답해주세요.'
  );
  if (questionNumber === 'y') {
    const addNumber = question(num + '번째 숫자를 입력해주세요 ');
    num++;
    total += Number(addNumber);
    console.log('현재까지 합친 숫자 : ' + total);
  } else {
    console.log('총합 : ' + total);
    result = false;
  }
}
