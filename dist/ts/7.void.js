// [1,2,3].forEach
/* void type */
function sayHi() {
    return "hello";
}
function printHi() {
    console.log("hello");
}
printHi();
/* never type */
// 존재하지 않는 / 불가능한 타입 / 어떤 값도 정의할 수 없는 타입
function showError(message) {
    throw new Error(message);
}
showError("해당 함수는 에러가 발생했습니다.");
function loop() {
    while (true) {
        // ...
    }
}
function* gen() {
    let count = 0;
    while (true) {
        yield ++count;
    }
}
export {};
/*

  Generator<T,R,P>
  T: yield 반환되는 값의 타입
  R: 함수에서 반환하는 값의 타입
  P: next() 메서드에서 전달되는 값의 타입

*/
