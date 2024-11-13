/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

console.log(AandB);
// Logical AND assignmemt
// a &&= b

// 논리합(또는) 연산자
let AorB = a || b;

console.log(AorB);
// Logical OR assignmemt
// a ||= b
// a = a || b

// 부정 연산자
let reverseValue = value;

console.log(!reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };

console.clear();

/* --------------------- */
// 자바 인포 문제
function login() {
  let userName = prompt('누구십니까?');

  // 함수는 return을 만나면 그 즉시 함수를 종료한다.
  // if(userName === null || userName === undefined) return
  // if(!userName) return

  if (userName.toLowerCase() === 'admin') {
    let password = prompt('비밀번호를 입력해주세요');

    if (password.toUpperCase() === 'MASTER') {
      console.log('로그인 성공');
    } else if (password === null) {
      console.log('취소됐습니다.');
    } else {
      console.log('잘못된 정보를 입력하셨습니다.');
      login(); // 재귀 함수 - 내가 나를 다시 호출
    }
  } else if (userName === null || userName.replace(/\s*/g, '') === '') {
    console.log('취소됐습니다.');
  } else {
    console.log('제대로된 값을 입력해주세요');
  }
}

login();
