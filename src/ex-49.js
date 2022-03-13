import { question } from 'readline-sync';
// 문제 049
// compnum이라는 이름의 변수를 생성하고 50을 설정한다.
// 사용자에게 숫자를 입력하라고 요청하고
// 입력한 값이 compnum과 동일하지 않다면
// 입력한 값이 높은지 낮은지를 알려주고
// 다시 맞춰보라고 묻는다.
// 만약 compnum의 값과 일치하면
// "Well done, you took [카운트] attempts"라는 메시지를 출력하라.

const compnum = 50;
let result = true;
while (result) {
  const questionNumber = question('숫자를 입력해주세요.. ');

  if (compnum === Number(questionNumber)) {
    console.log('Well done, you took ' + compnum + ' attempts');
    result = false;
  } else if (Number(questionNumber) < compnum) {
    console.log('입력값이 지정된 숫자보다 낮습니다.');
  } else {
    console.log('입력값이 지정된 숫자보다 높습니다.');
  }
}
