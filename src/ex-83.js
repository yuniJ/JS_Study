import { question } from 'readline-sync';
// 문제 083
// 사용자에게 대문자로 메시지를 입력하라고 요청한다.
// 만약 메시지 에 소문자가 있다면 모두 대문자로 입력할 때까지 계속해서 다시 입력하라고 요청한다.

message('사용자에게 대문자로 메시지를 입력해주세요..');
function message(prams) {
  const upperCase = question(prams);
  if (upperCase === upperCase.toLowerCase()) {
    return message('다시 입력해주세요');
  }

  return console.log(upperCase);
}
