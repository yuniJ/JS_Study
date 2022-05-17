import fs from 'fs';
import { question } from 'readline-sync';
import { parse } from 'csv-parse/sync';

// 문제 116
// Books.csv 파일의 데이터를 배열로 가져온다. 사용자에게 배열을 표시하고,
// 배열의 어떤 행을 삭제하고 싶은지를 선택하라고 요청하여 선택한 행을 삭제 한다.
// 또한, 수정하고 싶은 데이터를 선택하라고 요청하고 선택한 행을 수정한다.
// 데이터를 원래의 csv 파일에 다시 써서 기존 데이터를 수정된 데이터로 덮어쓴다.

const newFile = './src/Books.csv';

function printList() {
  const csv = fs.readFileSync(newFile);
  // console.log(csv.toString());
  const records = parse(csv.toString());
  console.log(records);
  return records;
}
const data = printList();

const delIndex = question('배열의 삭제하고 싶은 행을 고르세요...');

for (const index in data) {
  if (index === delIndex) {
    data.splice([delIndex], 1);
  }
}

console.log(data);

const correctIndex = question('수정하고 싶은 데이터를 선택해주세요...');
const correctData = question('수정 데이터를 작성해주세요...');
data[correctIndex] = correctData.split(' ');

// 데이터를 원래의 csv 파일에 다시 써서 기존 데이터를 수정된 데이터로 덮어쓴다.
console.log(data);

function changeText() {
  let dataList = '';
  for (const list of data) {
    dataList += list + '\n';
  }
  // console.log(dataList);
  return dataList;
}

// r : 파일을 읽기로 열며 해당 파일이 없다면 에러발생
// r+ : 읽기/쓰기 상태로 파일을 열며 파일이 없다면 에러 발생
// w : 쓰기로 파일을 열며 존재 하지 않으면 생성. 파일이 존재하면 내용을 지우고 처음부터 씀.
// w+ : 읽기/쓰기로 열며  존재 하지 않으면 생성. 파일이 존재하면 내용을 지우고 처음부터 씀.
// a : 추가 쓰기로 열며 파일이 존재하지 않으면 만듬.
// a+ : 추가 읽기/쓰기로 열며 파일이 존재 하지 않으면 만듬.

// 파일 생성
fs.open(newFile, 'w+', function (error) {
  if (error) throw error;
});

// 파일 쓰기
fs.writeFile(newFile, changeText(), 'utf8', function (error) {
  if (error) throw error;
  console.log('write end Books.csv');
});
