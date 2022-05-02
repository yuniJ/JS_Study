import fs from 'fs';
import { question } from 'readline-sync';
// 문제 108
// ‘Names.txt’ 파일을 연다. 사용자에게 새로운 이름을 입력하라고 요청한다.
// 입력된 이름을 파일의 끝에 추가하고(파일에 저장) 전체 파일을 출력하라.

// 텍스트 파일의 데이터 callback으로 전달
const file = './src/Names.txt';

// fs.readFile()으로 텍스트 파일 읽기,  async
// readFile(file, 'utf8', (error, data) => {
//   if (error) {
//     console.error(error);
//     return;
//   }

//   console.log(data);
// });

// fs.readFileSync()으로 텍스트 파일 읽기, sync
function outputUserName() {
  try {
    const data = fs.readFileSync(file, 'utf8');
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

outputUserName();

const addNewOne = question('새로운 이름을 입력해주세요..');

// writeFileSync('./src/Names.txt', addNewOne); // 파일 새로쓰기

try {
  fs.appendFile(file, '\n' + addNewOne, function (error) {
    if (error) throw error;
    outputUserName();
  });
} catch (error) {
  console.error(error);
}
