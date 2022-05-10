import fs from 'fs';
import { question } from 'readline-sync';
// 문제 111
// 다음의 데이터를 저장할 csv 파일을 생성하고 그 이름을 'Books.csv' 라고 하라.
const newFile = './src/Books.csv';
// const txtHeader = 'Title,Author,Publication Date\n';

const data = [
  ['Title', 'Author', 'Publication Date'],
  ['To Kill A Mockingbird', 'Harper Lee', '1960'],
  ['A Brief History of Time', 'Stephen Hawking', '1988'],
  ['The Great Gatsby', 'F. Scott Fitzgerald', '1922'],
  ['The Man Who Mistook His Wife for a Hat', 'Oliver Sacks', '1985'],
  ['Pride and Prejudice', 'Jane Austen', '1813'],
];

function changeText() {
  let dataList = '';
  for (const list of data) {
    dataList += '\n' + list;
  }
  // console.log(dataList);
  return dataList;
}

// console.log(changeText());

// 파일 생성
fs.open(newFile, 'w', function (error) {
  if (error) throw error;
});

// 파일 쓰기
fs.writeFile(newFile, changeText(), 'utf8', function (error) {
  if (error) throw error;
  console.log('write end Books.csv');
});
