import fs from 'fs';
import { question } from 'readline-sync';
import { parse } from 'csv-parse/sync';

// 문제 115
// Books.csv 파일을 사용하여 각 행 번호와 그에 대한 데이터를 출력하라.

const newFile = './src/Books.csv';

function printList() {
  const csv = fs.readFileSync(newFile);
  // console.log(csv.toString());
  const records = parse(csv.toString());
  renderList(records);
}

function renderList(records) {
  for (let index = 0; index < records.length; index++) {
    console.log(index + ' ' + records[index]);
  }
}

printList();
