//

// 숫자만 담을 수 있는 배열
let arrNum: number[] = [11, 12, 17];
// let arrNum: Array<number> = [11, 12, 17];
// 위의 2개는 모두 같다

// 문자만 담을 수 있는 배열
let arrStr: string[] = ["11", "12", "17"];

// 다양한 타입을 포함할 수 있는 배열 (튜플 아님)

let mixed: (string | number)[] = [1, "apple", 2, "banana", "...", 3];

// 숫자만 담을 수 있는 배열 (튜플로 정의)

let matrix: [number, number, number][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
