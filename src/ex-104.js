import { question } from 'readline-sync';
// 문제 104
// 네 명의 이름과 나이 그리고 신발 사이즈를 입력받은 후, 목록에서 제거하고 싶은 사람의 이름을 입력하라고 한다.
// 입력된 이름의 데이터를 삭제하고 나머지 데이터를 한 줄에 하나씩 출력하라.

const array = {
  // John: { age: 10, size: 240 },
  // Tom: { age: 10, size: 240 },
  // Anne: { age: 10, size: 240 },
  // Fiona: { age: 10, size: 240 },
};
console.log(array);

for (let i = 0; i < 2; i++) {
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

const deleteUser = question(
  '목록에서 제거하고 싶은 사람의 이름 입력해주세요..'
);

delete array[deleteUser];
for (const key in array) {
  if (Object.hasOwnProperty.call(array, key)) {
    console.log(key + ' : age:' + array[key].age + ' size: ' + array[key].size);
  }
}
