/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// object literal -> function constructor -> class syntax

class Animal {
  // public class field 공간
  leg = 4;
  tail = true;
  #name = 'unknown'; // #을 적으면 privite field - 밖에서 접근하지 못함, 함수 내부에서만 사용가능

  constructor(name) {
    // 최최 1회만 실행 - 초기화할때 많이 사용!
    this.#name = name;
    this.stomach = [];
    console.log(this.#name);
  }

  get eat() {
    return this.stomach;
  }

  set eat(food) {
    this.stomach.push(food);
  }
}

//
class Tiger extends Animal {
  // 이렇게 static으로 옵션을 함수 안에 설정하면 전역을 오몀시키지 않음
  static defaultProps = {
    version: '1.0.0',
    company: '8b-studio',
    ceo: '심선범',
  };

  constructor(name) {
    super(name);
    this.pattern = '호랑이 무늬';
  }

  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  }

  // 앞에 static을 붙이면 static 매서드로 사용가능
  // Tiger.bark() 로 사용가능
  static bark(sound) {
    return sound + '🐯';
  }
}

// const a = new Animal('몽실이');
const 호랑이 = new Tiger('호돌이');

/* static 매서드와 instance 매서드 설명 */

// const arr = new Array()

// arr.forEach()

// Array.isArray()

// class Array extends Object(){

//   forEach(){

//   }

//   reduce(){

//   }

//   static isArray(){

//   }
// }
/* ------------ */

/* 
1. 버튼 선택
2. 클릭 이벤트
3. 태그 만들기
4. 태그 화면에 렌더링 하기
*/

// class 함수 버전
class Button {
  constructor(selsctor) {
    this.button = document.querySelector(selsctor);
    this.count = 0;
    this.attachEvent();
  }

  createTag() {
    return `<div>${++this.count + 'clicked'}</div>`;
  }

  #render() {
    document.body.insertAdjacentHTML('beforeend', this.createTag());
  }

  handleClick() {
    this.#render();
  }

  attachEvent() {
    this.button.addEventListener('click', this.handleClick.bind(this));
  }
}

const button = new Button('.btn');

// 일반 함수 버전
// const _button = document.querySelector('.btn');

// let count = 0;

// function handleClick() {
//   const tag = `
//     <div>${++count + 'clicked'}</div>
//   `;

//   document.body.insertAdjacentHTML('beforeend', tag);
// }

// 위에 함수를 나누기
// function createTag() {
//   return `<div>${++count + 'clicked'}</div>`;
// }

// function render(data) {
//   document.body.insertAdjacentHTML('beforeend', data);
// }

// function handleClick() {
//   render(createTag());
// }

// _button.addEventListener('click', handleClick);

/* ------------ */

class User {
  // 밖에서 접근하지 못하게 privite field를 사용
  #password;

  constructor(userID, userPW) {
    this.userID = userID;
    this.#password = this.hashPassword(userPW);
  }

  hashPassword(pw) {
    return 'hachCODE' + pw + '소금찹찹';
  }

  checkPassword(pw) {
    return this.#password === this.hashPassword(pw);
  }
}

const user = new User('tiger', 'hello123');
