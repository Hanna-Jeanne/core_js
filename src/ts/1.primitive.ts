// number, string, boolen, null, undefined...

/* number type */
let num1: number = 10; // 타입 주석 : 타입 어노테이션
let num2: number = NaN;
let num3: number = -123;
let num4: number = 0.1234567;

/* string type */
let str1: string = "hi";
let str2: string = "hi${num2}";

/* boolen type */
let bool1: boolean = true;
let bool2: boolean = false;

/* null type */
let nullA: null = null;

/* undefined type */
let undef: undefined = undefined;

/* literal type */
let numA: 10 = 10;
let strA: "hello" = "hello";
let boolA: true = true;

/* unknown type */
let unknown: unknown;
// 함수에 종종 쓰임

/* never type */
let never: never;
// 에러를 내보낼 때나 무한 루프를 돌아야 될 떄

/* any type */
let any: any;
// 뭐든 다 넣어도 된다, 무슨 타입이든 - 마지노선
