// 문제 105
// ‘Numbers.txt’라는 이름의 새로운 파일을 생성한다. 한 줄에 쉼표로 구분된 다섯 개의 숫자를 추가한다.
// 프로그램을 실행하고 나서 이 프로그램이 저장된 위치에 해당 파일이 생성되었는지 확인한다.
// 여러분이 윈도우 시스템을 사용하고 있다면 이 파일을 메모장에 불러와서 확인하는 게 가장 쉽게 확인하는 방법일 것이다.

import fs from 'fs';

const file = './src/Numbers.txt';

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
const data = '10,20,30,40,50';
fs.writeFile(file, data, 'utf8', function (error) {
  if (error) throw error;
  console.log('write end Numbers.txt');
});
