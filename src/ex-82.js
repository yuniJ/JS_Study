import { question } from 'readline-sync';
// 문제 082
// 시 한 구절을 사용자에게 표시하고
// 시작 인덱스와 마지막 인덱스를 입력하도록 요청한다.
// 입력한 두 값 사이의 문자를 출력하라.

// string.length
const poem =
  '문여하사서벽산(問余何事棲碧山)\n소이부답심자한(笑而不答心自閑)\n도화유수묘연거(桃花流水杳然去)\n별유천지비인간(別有天地非人間)';

console.log(poem);

const startIndex = question('시작 인덱스를 입력해주세요..');
const lastIndex = question('마지막 인덱스를 입력해주세요..');
let result = '';

for (let i = startIndex; i < lastIndex; i++) {
  result += poem[i];
}

console.log(result);
