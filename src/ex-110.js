import fs from 'fs';
import { question } from 'readline-sync';
// 문제 110
// 앞에서 생성한 Names.txt 파일을 이용하여 목록의 이름들을 출력한다
// 그 이름들 중 하나를 입력하라고 요청하고, 그 이름을 제외한 나머지 이름들을 Names2.txt라는 새로운 파일에 저장하라.
// 프로그램을 여러 번 실행하여 옵션들을 테스트하라.

const file = './src/Names.txt';
// fs.readFileSync()으로 텍스트 파일 읽기, sync

function outputUserName() {
  try {
    const data = fs.readFileSync(file, 'utf8');
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
// outputUserName();

const userName = outputUserName().split('\n');

const removeUser = question('이름들 중 하나를 입력해주세요...');

userName.splice(userName.indexOf(removeUser), 1);

console.log(userName);

const newFile = './src/Names2.txt';

function changeText() {
  let newNames = '';
  for (const list of userName) {
    newNames += list + '\n';
  }
  return newNames;
}

// 파일 생성
fs.open(newFile, 'w', function (error) {
  if (error) throw error;
});

// 파일 쓰기
fs.writeFile(newFile, changeText(), 'utf8', function (error) {
  if (error) throw error;
  console.log('write end Numbers2.txt');
});
