// for문 : 모든 데이터 순환용 => 작성 코드가 많다 => 무한루프 여지
// for..in문 : 객체 순환용 => 정해진 아이템의 갯수만큼 => 배열 순환 x
// for..of문 : iterable 요소 순환용 => 정해진 아이템의 갯수만큼 => 배열 순환 o

// 객체인데.. for..of 사용하고 싶다.. 미치도록...
// 1. symbol.iterator => 핵귀찮음
// 2. 객체를 배열로 만들어버려!

const obj = {
  nickName: 'tiger',
  age: 40,
};

// 객체의 static method

const keys = Object.keys(obj); // 객체의 key들을 모아 새로운 배열을 '반환' 하는 유틸 함수
const values = Object.values(obj); // 객체의 value들을 모아 새로운 배열을 '반환' 하는 유틸 함수
const entries = Object.entries(obj); // 객체의 [key,value]들을 모아 한 쌍의 배열을 이루는 새로운 배열을 '반환' 하는 유틸 함수

// 배열 구조 분해 할당

// for (const [key, value] of Object.entries(obj)) {
//   console.log(value);
// }

for (const keyValue of entries) {
  const key = keyValue[0];
  const value = keyValue[1];

  console.log(value);
}
