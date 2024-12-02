/* Array Type */
let arr = [1, 2, 3];
let str = ["a", "b", "c"];
/* generic type 타입 변수 => 함수 */
let _arr = [1, 2, 3];
let _str = ["a", "b", "c"];
// 유니온 타입
let multi = ["hello", 10, false];
// multi = [10, "hi", true];
/* Tuple Type */
// 길이가 고정돠어 있다. 배열처럼 길이가 동적으로 변경되지 않음
// 자리의 타입이 정해져 있다.
// 하나라도 뺴먹으면 안된다!
let tupleA = [1, 2]; // number가 2번 적어 있으니깐 숫자가 2개가 와야한다.
let person = ["tiger", 30];
// 다차원 배욜
const user = [
    ["p1", 10],
    ["p2", 20],
    ["p3", 30],
];
export {};
