/* any type */
let obj;
obj = { x: 10 };
obj = 123;
obj = () => { };
obj.toUpperCase();
/* unknown */
let arr;
arr = 1;
arr = "hello";
// 타입 좁히기 (narrowing)
if (typeof arr === "number") {
    arr.toFixed();
}
export {};
