/* earth */

function earth() {
  let water = true;
  let gravity = 10;

  return (value) => [water, gravity];
}

const ufo = earth();

ufo(false);

// 개념은 이해 했습니다. 근데, 어디다 써요?

const button = document.querySelector('button');

const handleClick = (() => {
  let clicked = false;

  return () => {
    if (!clicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = 'white';
    }

    clicked = !clicked;
  };
})(); // ep패턴 - 즉시 실행함수

button.addEventListener('click', handleClick); // 개발자는 이벤트를 설정하면 그거에 따른 책임을 가져야 한다.
// button.removeEventListener('click',handleClick);

/* useState */
function useState(init) {
  let value = init;

  function read() {
    return value;
  }

  function write(newValue) {
    value = newValue;
  }

  return [read, write];
}

// const result = state(10);
// const read = result[0];
// const write = result[1];

const [number, setValue] = useState(false);
