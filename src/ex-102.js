import { question } from 'readline-sync';
// 문제 102
// 네 명의 이름과 나이, 신발 사이즈를 입력하라고 요청한다.
// 입력된 이름들 중 하나를 입력하라고 요청하고 입력된 이름의 나이와 신발 사이즈를 출력하라.

const array = {
  // John: { age: 10, size: 240 },
  // Tom: { age: 10, size: 240 },
  // Anne: { age: 10, size: 240 },
  // Fiona: { age: 10, size: 240 },
};
console.log(array);

for (let i = 0; i < 4; i++) {
  const userInfo = question(
    i + 1 + '번째 이름과 나이, 신발 사이즈를 입력해주세요..'
  );

  const userInfoArray = userInfo.split(' ');

  array[userInfoArray[0]] = {
    age: userInfoArray[1],
    size: userInfoArray[2],
  };

  console.log(array);
}

const findUser = question('입력된 이름들 중 하나를 입력해주세요..');
console.log(array[findUser]);
