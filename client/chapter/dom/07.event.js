/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

// 2. DOM 프로퍼티 : element.onclick = handler

const about = getNode('.about');
const home = getNode('.home');
// about.onclick = handler;

// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handler(e) {
  // console.log(e.offsetX,e.offsetY);

  console.log(e.wheelDeltaY);
}

about.addEventListener('wheel', handler);

// const remove = bindEvent(about,'click',handler);
// home.addEventListener('click',remove)

/* ------------ */

const ground = getNode('.ground');
const ball = getNode('.ball');

//
function handleBall(e) {
  // const x = e.offsetX;
  // const y = e.offsetY;
  const { offsetX: x, offsetY: y } = e; // 구조분해 할당(바로 위의 x,y를)

  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  ball.style.transform = `translate(${x - w / 2}px,${y - h / 2}px)`;
}

ground.addEventListener('click', handleBall);

//
function handleMove({ offsetX: x, offsetY: y }) {
  // const w = ball.offsetWidth;
  // const h = ball.offsetHeight;
  // ball.style.transform = `translate(${x - w / 2}px,${y - h / 2}px)`;

  const template = `
    <div class="emotion" style="top:${y}px; left:${x}px">🌟</div>
  `;
  insertLast(ground, template);
}

ground.addEventListener('mousemove', handleMove);

// debounce

const input = getNode('input');

function handleInput() {
  if (this.value === 'seonbeom@gmail.com') {
    console.log('통과');
  }
}

input.addEventListener('input', handleInput);

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener
