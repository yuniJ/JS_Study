// 문제 107
// ‘Names.txt’ 파일을 열고 읽어서 데이터를 표시하라.

// 텍스트 파일의 데이터 callback으로 전달
// fs.readFileSync()으로 텍스트 파일 읽기, sync
import fs from 'fs';

const file = './src/Names.txt';

try {
  const data = fs.readFileSync(file, 'utf8');
  console.log(data);
} catch (error) {
  console.error(error);
}
