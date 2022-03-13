import { question } from 'readline-sync';
// 문제 051
// "10 green bottles" 노래(영국의 유명한 동요)를 이용하여
// "There are [숫자] green bottles hanging on the wall,
// [] green bottles hanging on the wall,
// and if 1 green bottle should accidentally fall"이라는 가사를 출력하고,

// "how many green bottles will be hanging on the wall?"이라고 질문한다.
// 만약 사용자가 맞히면 "There will be [숫자] green bottles hanging on the wall"이라는 메시지를 출력하고,
// 틀리면 "No, try again" 메시지를 출력한 뒤 맞출 때까지 반복한다.

// green bottle의 개수가 0이 되면
// "There are no more green bottles hanging on the wall"이라는 메시지를 출력하고
// 종료한다
let bottleNumber = 10;

let result = true;

while (result) {
  console.log(
    'There are [' +
      bottleNumber +
      '] green bottles hanging on the wall,\n[' +
      bottleNumber +
      '] green bottles hanging on the wall,\nand if 1 green bottle should accidentally fall \n'
  );
  const questionNumber = question(
    'How many green bottles will be hanging on the wall?.. '
  );
  const total = Number(questionNumber);

  if (total === bottleNumber - 1) {
    console.log(
      '\nThere will be [' + total + '] green bottles hanging on the wall \n'
    );
    bottleNumber = total;
  } else {
    console.log('No, try again');
  }

  if (total === 0) {
    console.log('There are no more green bottles hanging on the wall');
    result = false;
  }
}
