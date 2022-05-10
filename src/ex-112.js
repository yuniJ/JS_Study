import fs from 'fs';
import { question } from 'readline-sync';
// 문제 111
// 111번 프로그램에서 만든 Books.csv 파일을 사용한다. 사용자에게 다른 레코드를 입력하도록 요청하고 입력된 데이터를 파일의 끝에 추가한다. csv 파일의 각 행을 한 줄에 하나씩 출력하라.

const newFile = './src/Books.csv';

const title = question('제목을 입력해주세요...');
const author = question('작가를 입력해주세요...');
const date = question('발행일을 입력해주세요...');
const addData = title + ',' + author + ',' + date;

fs.appendFile(newFile, '\n' + addData, function (error) {
  if (error) throw error;
});

fs.readFile(newFile, 'utf8', (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(data);
});
