/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  // return priceA + priceB + priceC + priceD;
  // 함수 안에서만 접근 가능한 인수들의 집합 객체 존재 : arguments => 유사 배열 => 지역 변수

  let total = 0;
  // for 문
  // for (let i = 0; i < arguments.length; i++) {
  //   total += arguments[i];
  // }

  // for ...of
  // for (const value of arguments) {
  //   total += value;
  // }

  // console.log(arguments); // 유사 배열
  // arguments => array

  // const arr = [...arguments]; // spread syntax
  // const arr = Array.from(arguments); // 배열의 static mathod
  const arr = Array.prototype.slice.call(arguments);
  // 배열의 instance mathod - 배열만 쓸 수 있는 능력이라 call()로 빌려 씀

  /* ---- 배열의 instance mathod ---- */

  // forEach => 배열을 순환 => 값을 반환 X
  // arr.forEach(function (price, i) {
  //   // (value, index, array) : 정해진 인자
  //   // console.log(value, index, array);

  //   total += price;
  // });

  // reduce => 배열을 순환 => 값을 반환 (문자, 숫자 , 불린, 배열 , 객체...)
  // arr.reduce(function (acc, cur) {
  //   // acc은 이니셜 벨류로 초기값을 설정하지 않은면 배열의 첫번째 값이 된다.
  //   return acc + cur;
  // }, 0);
  // 화살표 함수로 바꾼 방법
  // reduce + arrow function
  // return arr.reduce((acc,cur)=> acc + cur)

  /* -------- */

  // arguments
  // 한번만 빌려쓰는 거라 일회성이다.
  // Array.prototype.forEach.call(arguments, function (price) {
  //   total += price;
  // });

  // 부모 바꿔치기
  // 상속을 배열로 바꿈(arguments의 prototype을 Array(배열)로 바꿈, 배열의 능력을을 다 쓸 수 있음)
  arguments.__proto__ = Array.prototype;

  console.log(total);
};

const result = calculateTotal(10000, 30000, 45000, 2500, 30000, 25000);

console.log(result);

// this 찾기 - 참고
// const obj = {
//   total: null,
//   item: [1000, 2000, 3000],
//   totalPrice() {
//     this.item.forEach((price) => {
//       this.total += price; // 여기서의 this는 window! : 실행을 할 수 없기 때문에 윈도우가 실행해줌
//     });
//   },
// };

// obj.totalPrice();

/* ----------- */
// Array instance method
//  forEach => 배열을 순환 => 값을 반환하지 X
//  reduce  => 배열을 순환 => 값을 반환 : 문자,숫자,불린,배열,객체.....
//  map     => 배열을 순환 => 값을 반환 : ⭐️ 새로운 배열 ⭐️

const friends = ['박혜미', '이강현', '공세현', 'MJ'];

const f = friends.map(function (name, index) {
  return `<li data-order="${index + 1}"> 이름 : ${name} </li>`;
});

f.forEach(function (tag) {
  document.body.insertAdjacentHTML('beforebegin', tag); // beforebegin 은 집어 넣는 위치(바꿀 수 있다)
});

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
// let callbackFunctionExpression;
/* ---- cd 함수 ---- */
let cb = function (condition, success, fail) {
  if (condition) success();
  else fail();
};

cb(
  true,
  function () {
    console.log('성공입니다!');
  },
  function () {
    console.log('실패입니다!');
  }
);

// arrow function
cb(
  true,
  () => console.log('성공입니다!'),
  () => console.log('실패입니다!')
);

/* ---- movePage 함수 ---- */
function movePage(url, success, fail) {
  if (url.includes('https')) {
    success(url);
  } else {
    fail();
  }
}

// 콜백 함수 => arrow function 보기가 편하다!
movePage(
  'https://www.daum.net',
  function (url) {
    console.log(
      `현재 입력하신 url은 ${url}입니다. 3초 뒤 해당 사이트로 이동합니다.`
    );
  },
  function () {
    console.log('잘못된 경로를 입력하셨습니다.');
  }
);

// arrow function

movePage(
  'https://www.daum.net',
  (url) => `현재 입력하신 url은 ${url}입니다. 3초 뒤 해당 사이트로 이동합니다.`,
  () => console.log('잘못된 경로를 입력하셨습니다.')
);

/* ---- getGeolocation 함수 ---- */
function getGeolocation(success, fail) {
  navigator.geolocation.getCurrentPosition((so) => {
    const data = so.coords.latitude;
    success(data);
  });
}

// getGeolocation(function (value) {
//   console.log(value);
// });

/* -------- */

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
// 함수가 선언됨과 동시에 실행되는 것을 말합니다.
let IIFE;

(function () {})();

// 예시
(function () {
  console.log('안녕 함수');
})();

// var는 블록 스코프 : x
// var는 함수 스코프 : o

// encapsulation (캡슐화) - 요즘은 캡슐화의 개념보다 클로저에서 많이 사용됨

// 캡슐화 대신에 모듈 프로그래밍을 이용함
// 모듈 프로그래밍 => import export
// import { css } from "./css.js";

const MASTER = (function (g) {
  console.log(g);

  var uuid = 'asdkjfxzc!@4ja8QKEAnqw^@';

  return {
    getKey() {
      return uuid;
    },
    setKey(value) {
      uuid = value;
    },
  };
})(window);

const css = (function () {
  function setCss(node, prop, value) {
    if (typeof node === 'string') node = document.querySelector(node);

    if (!(prop in document.body.style))
      throw new ReferenceError(
        'setCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.'
      );

    if (!value)
      throw new Error('setCss 함수의 세 번째 인수는 필수 입력 값 입니다.');

    node.style[prop] = value;
  }

  function getCss(node, prop) {
    if (typeof node === 'string') {
      node = document.querySelector(node);
    }

    if (!(prop in document.body.style)) {
      throw new ReferenceError(
        'getCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.'
      );
    }

    return getComputedStyle(node)[prop];
  }

  function css(node, prop, value) {
    return !value ? getCss(node, prop) : setCss(node, prop, value);
  }

  return css;
})();
