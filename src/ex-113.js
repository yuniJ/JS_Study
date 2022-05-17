import fs from 'fs';
import { question } from 'readline-sync';
import { parse } from 'csv-parse/sync';

// 문제 113
// Books.csv 파일을 사용하며,
// 리스트에 몇 개의 레코드를 추가하고 싶은지 묻고
// 입력한 만큼 추가할 수 있도록 한다.

// 모든 데이터가 추가된 후에 사용자에게 검색할 저자의 이름을 입력하라고 요청하고,

// 입력된 저자의 모든 책 정보를 출력한다.
// 만약 입력한 저자의 책이 하나도 없다면 그에 맞는 메시지를 출력하라.

const newFile = './src/Books.csv';

const repeat = question('몇 개의 레코드를 추가하고 싶으세요?...');
let addDataArray = '';

function addData(repeat) {
  for (let i = 0; i < repeat; i++) {
    const title = question('제목을 입력해주세요...');
    const author = question('작가를 입력해주세요...');
    const date = question('발행일을 입력해주세요...');
    addDataArray += title + ',' + author + ',' + date + '\n';
  }
}

addData(repeat);

// console.log(addDataArray);

fs.appendFile(newFile, addDataArray, function (error) {
  if (error) throw error;

  console.log('add data to Books.csv');
});

const search = question('검색할 저자의 이름을 입력해주세요?...');
// 입력된 저자의 모든 책 정보를 출력한다.
// 만약 입력한 저자의 책이 하나도 없다면 그에 맞는 메시지를 출력하라.

searchAuthor(search);

function searchAuthor(search) {
  const csv = fs.readFileSync(newFile);
  // console.log(csv.toString());
  const records = parse(csv.toString());
  const findInfo = records.filter((records) => records[1] === search);

  if (findInfo.length === 0) return console.log('찾으시는 저자가 없습니다.');

  //render
  for (let index = 0; index < findInfo.length; index++) {
    console.log(
      'Title : ' +
        findInfo[index][0] +
        ',' +
        ' Author : ' +
        findInfo[index][1] +
        ',' +
        ' Publication Date : ' +
        findInfo[index][2]
    );
  }
}
