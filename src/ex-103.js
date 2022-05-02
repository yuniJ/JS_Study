import { question } from 'readline-sync';
// 문제 103
// 102번 프로그램을 수정하여 모든 사람의 이름과 나이를 출력하라. 단, 신발 사이즈는 출력하지 않는다.

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

for (const key in array) {
  if (Object.hasOwnProperty.call(array, key)) {
    console.log(key + ' : age : ' + array[key].age);
  }
}
