import {
  hanna,
  getNode,
  delayP,
  insertLast,
  addClass,
  removeClass,
  renderUserCard,
  renderSpinner,
  changeColor,
  renderEmptyCard,
  clearContents,
  getNodes,
} from './lib/index.js';

const END_POINT = 'http://localhost:3000/users';

const userCardInner = getNode('.user-card-inner');

async function renderUserList() {
  renderSpinner(userCardInner);

  try {
    const response = await hanna.get(END_POINT);

    // getNode('.loadingSpinner').remove();
    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        this._targets[0].remove();
      },
    });

    const data = response.data;

    await delayP(1000);

    data.forEach((user) => renderUserCard(userCardInner, user));

    changeColor('.user-card');

    gsap.from('.user-card', {
      x: -100,
      opacity: 0,
      stagger: {
        each: 0.1,
        from: 'start',
      },
    });
  } catch {
    renderEmptyCard(userCardInner);
  }
}

renderUserList();

// 1. user 데이터 fetch 해주세요.

// 2. fetch 데이터 유저의 이름만 콘솔에 출력

//

function handleDeleteCard(e) {
  const button = e.target.closest('button');

  if (!button) return;

  const article = button.parentElement;
  const index = article.dataset.index.slice(5);

  hanna.delete(`${END_POINT}/${index}`).then(() => {
    alert('삭제가 완료됐습니다.');

    clearContents(userCardInner);
    renderUserList();
  });
  // 삭제해도 화면에서 카드가 사라지지는 않음 => 하지만 데이터는 삭제됨
}
userCardInner.addEventListener('click', handleDeleteCard);

/* ------------------------- */

// create 버튼

const btnCreate = getNode('.create');
const btnCancel = getNode('.cancel');
const btnDone = getNode('.done');

// create 버튼을 선택한다.
// 클릭 이벤트를 바인딩한다.
// create에 open 클래스를 추가한다.

// cancel 버튼을 선택한다.
// 클릭 이벤트를 바인딩한다.
// create에 open 클래스를 제거한다.

// POST 통신을 해주세요.

// 1. input의 value를 가져온다.
// 2. value를 모아서 객체를 생성
// 3. 생성 버튼을 누르면 POST통신을 한다.
// 4. body에 생성한 객체를 실어보낸다.
// 5. 카드 컨텐츠 비우기
// 6. 유저카드 리랜더링

const nameField = getNode('#nameField');

function handleCreate() {
  this.classList.add('open');
  gsap.to('.pop', { autoAlpha: 1 });
  // getNode('#nameField').focus()
}

function handleCancel(e) {
  e.stopPropagation();
  // 버블링을 막기위해 - 자식을 선택하면 부모가 선택되는 걸 막기 위해

  // btnCreate.classList.remove('open');

  gsap.to('.pop', { autoAlpha: 0 });
}

// input value

function handleDone(e) {
  e.preventDefault();

  const username = getNode('#username').value;
  const email = getNode('#email').value;
  const website = getNode('#website').value;

  // const obj = { username, email, website };
  // console.log(obj);

  hanna.post(END_POINT, { username, email, website }).then(() => {
    gsap.to('.pop', { autoAlpha: 0 });

    clearContents(userCardInner);
    renderUserList();

    getNode('#nameField').value = '';
    getNode('#emailField').value = '';
    getNode('#siteField').value = '';
  });
}

btnCreate.addEventListener('click', handleCreate);
btnCancel.addEventListener('click', handleCancel);
btnDone.addEventListener('click', handleDone);
