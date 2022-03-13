// 문제 053
// 다섯 개의 과일 이름들의 목록에서 임의의 과일을 출력하라.
const fruit = ['사과', '포도', '딸기', '자몽', '한라봉'];

const maxNumber = 5;
const randomNumber = Math.random() * maxNumber;
const result = Math.floor(randomNumber);
console.log(fruit[result]);
