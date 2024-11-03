/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(typeof empty);

// 2. 값이 할당되지 않은 상태
let undef;
console.log(typeof undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const double = 'hello';
const single = 'hello';
const backtick = `인도의 ${double / 30} 이 맛있다.`;

console.log(backtick);

// console.log(typeof double, typeof single, typeof backtick);

// 4. 정수, 부동 소수점 숫자(길이 제약)

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
// 6. 참(true, yes) 또는 거짓(false, no)
// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
// 8. 고유한 식별자(unique identifier)

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof

// 2) 함수 typeof()

// 언어 상, 오류

// Object
// 객체에 메서드를 정의하는 방법

// 1. normal function
// 2. arrow function
// 3. concise method

// this 나를 호출한 대상

// arrow function은 this를 바인딩하지 않습니다.(상위 컨텍스트에서 this를 찾습니다.)

// 객체의 메서드를 정의할 때 => concise method 사용 권장
// 메서드 안에서 함수를 정의해야 할 때 => arrow function 사용 권장
// 이유는 this를 찾기 위해서

const user = {
  name: 'tiger',
  age: 42, // 객체 안에 키랑 밸류를 프로퍼티라고 함
  payment: false,
  sayHi: function () {
    console.log(this);
  }, // 객체 안에 함수를 매서드라고 함
  sayHi2: () => {
    console.log(this);
  },

  sayHi3() {
    const sayBye = () => {
      console.log((this.age = 30));
    };

    sayBye();
  },
};

// Array

// function

// this
