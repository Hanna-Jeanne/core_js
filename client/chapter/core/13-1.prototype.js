/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// enumerable

/* object literal */

const animal = {
  legs: 4,
  tail: true,
  stomach: [],

  // getter 함수 - 사용법 animal.eat
  get eat() {
    return this.stomach;
  },

  // setter 함수 - 사용법 animal.eat = '여우'
  set eat(food) {
    this.stomach = [];
    this.stomach.push(food);
  },
};

const tiger = {
  pattern: '호랑이 무늬',
  hunt(target) {
    this.prey = target;
    this.eat = this.prey;
    return `${target}에게 조용히 접근한다.`;
  },
  __proto__: animal,
};

const 백두산호랑이 = {
  name: '백돌이',
  color: 'white',
  __proto__: tiger,
};

const 한라산호랑이 = {
  name: '한돌이',
  color: 'orange',
  __proto__: tiger,
};

/* object constructor function */
// 생성자 함수 - getter 함수와 setter 함수를 구분 못함

function Animal() {
  this.legs = 4;
  this.tail = true;
  this.getEat = function () {
    return this.stomach ?? [];
  };
  this.setEat = function (food) {
    this.stomach = [];
    this.stomach.push(food);
  };
}

// const a = new Animal();

function Tiger(name) {
  // Animal의 능력을 this 금강산호랑이가 다 받아서 빌려서 실행시켜줌
  // Tiger.prototype = a; 를 안써도 됨
  Animal.call(this);

  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt = function (target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  };
}

// Tiger.prototype = a;

const 금강산호랑이 = new Tiger('금순이');

/* function instance method */

// call -> 함수를 대신 실행시켜줌 -> 빌려쓰기 -> 인수 : 값 으로 받음
// apply -> 함수를 대신 실행시켜줌 -> 빌려쓰기 -> 인수 : 배열 로 받음

// bind -> 함수를 대신 실행 X -> 빌려쓰기

// call, apply, bind => this 를 강제하게 위해 사용!!

// function sum(a,b){
//   console.log(this, a + b);
// }

// Object.prototype.hasOwnProperty.call(obj,key)

// sum.call('안녕!',10,20) // 안녕은 this로 들어가고, 뒤에 것들은 인수로 들어감

// sum.apply('안녕!',[10,20])

// const _sum = sum.bind('안녕!',10,20)
