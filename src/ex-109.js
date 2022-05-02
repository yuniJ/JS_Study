import fs from 'fs';
import { question } from 'readline-sync';
// 문제 109
// 사용자에게 다음과 같이 메뉴를 표시하라

// 1. Create a new file
// 2. Display the file
// 3. Add a new item to the file Make a selection 1, 2 or 3:

// 사용자에게 1, 2 또는 3을 입력하라고 요청한다. 다른 것을 입력한다면 에러 메시지를 출력한다.

// 만약 1을 선택하면 과목명을 입력하라고 요청하고, 그것을 ‘Subject.txt'라는 이름의 새로운 파일에 저장한다.
// 기존 파일이 있다면 새 파일로 덮어쓰게 된다

// 2를 선택하면 'Subject.txt' 파일의 내용을 출력한다

// 3을 선택하면 새로운 과목명을 입력하라고 요청하고, 그것을 파일에 저장한 후에 파일의 전체 내용을 출력 한다.

const menu = [
  '1. Create a new file',
  '2. Display the file',
  '3. Add a new item to the file Make a selection 1, 2 or 3.',
];

menu.forEach(function (menu, index) {
  console.log(menu, index + 1);
});

const addNewOne = Number(question('메뉴 중 번호(1,2,3)를 입력해주세요..'));

if (addNewOne < 4 && addNewOne > 0) {
  const fileName = './src/Subject.txt';

  switch (addNewOne) {
    case 1:
      const addSubject = question('과목명을 입력해주세요..');

      fs.open(fileName, 'w', function (error) {
        if (error) throw error;
      });

      fs.writeFile(fileName, addSubject, 'utf8', function (error) {
        if (error) throw error;
        console.log('write end Subject.txt');
      });

      break;

    case 2:
      readFile(fileName);
      break;

    case 3:
      const addNewSubject = question('새로운 과목명을 입력해주세요..');

      fs.appendFile(fileName, '\n' + addNewSubject, function (error) {
        if (error) throw error;
        readFile(fileName);
      });

      break;

    default:
      console.log('error');
      break;
  }
} else {
  console.log('잘못된 번호를 선택하셨어요');
}

function readFile(fileName) {
  fs.readFile(fileName, 'utf8', (error, subjectData) => {
    if (error) {
      console.error(error);
      return;
    }

    console.log(subjectData);
  });
}
