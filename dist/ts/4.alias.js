/* alias type */
// interface _User {
//   address: string;
// }
// 병합이 됨
const user1 = {
    id: 1,
    name: "tiger",
    auth: "admin",
    isPaid: true,
};
const user2 = {
    id: 2,
    name: "beom",
    auth: "admin",
    isPaid: true,
};
const user3 = {
    id: 2,
    name: "beom",
    auth: "admin",
    isPaid: true,
};
const person = {
    name: "beom",
    age: 30,
    email: "tiger@naver.com",
    address: "서울시 중랑구",
    phone: "01071690262",
    // id:true
};
export {};
