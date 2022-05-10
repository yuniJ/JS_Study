import fs from 'fs';
import { question } from 'readline-sync';
import { parse } from 'csv-parse/sync';

// 문제 114
// Books.csv 파일을 사용하며, 사용자에게 시작 년도와 끝 년도를 입력하라고 요청한다. 입력된 두 년도 사이에 출간된 모든 책을 출력하라.

const newFile = './src/Books.csv';

const startYear = question('시작 년도를 입력해주세요...');
const endYear = question('끝 년도를 입력해주세요...');

function searchBooks(startYear, endYear) {
  const csv = fs.readFileSync(newFile);
  // console.log(csv.toString());
  const records = parse(csv.toString());
  const findInfo = records.filter(
    (records) => records[2] > startYear && records[2] < endYear
  );

  if (findInfo.length === 0) return console.log('찾으시는 저자가 없습니다.');

  renderList(findInfo);
}

function renderList(findInfo) {
  //render
  for (let index = 0; index < findInfo.length; index++) {
    console.log(
      index +
        ' ' +
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

searchBooks(startYear, endYear);
