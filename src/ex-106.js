// 문제 106
// ‘Names.txt’라는 이름의 새로운 파일을 생성한다. 다섯 명의 이름을 한 줄에 하나씩 문서에 추가한다.
// 프로그램을 실행한 후에 이 프로그램이 저장된 위치에 해당 파일이 제대로 생성되었는지 확인하라.

// 텍스트 파일의 데이터 callback으로 전달
// fs.readFileSync()으로 텍스트 파일 읽기, sync
import fs from 'fs';

const file = './src/Names.txt';

// 파일 생성
fs.open(file, 'w', function (error) {
  if (error) throw error;
});

// r : 파일을 읽기로 열며 해당 파일이 없다면 에러발생
// r+ : 읽기/쓰기 상태로 파일을 열며 파일이 없다면 에러 발생
// w : 쓰기로 파일을 열며 존재 하지 않으면 생성. 파일이 존재하면 내용을 지우고 처음부터 씀.
// w+ : 읽기/쓰기로 열며  존재 하지 않으면 생성. 파일이 존재하면 내용을 지우고 처음부터 씀.
// a : 추가 쓰기로 열며 파일이 존재하지 않으면 만듬.
// a+ : 추가 읽기/쓰기로 열며 파일이 존재 하지 않으면 만듬.

// 파일 쓰기
const data = '이동국\n안정환\n허민호\n이장군\n김현우';
fs.writeFile(file, data, 'utf8', function (error) {
  if (error) throw error;
  console.log('write end Names.txt');
});
