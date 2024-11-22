import {
  hanna,
  getNode,
  delayP,
  insertLast,
  renderUserCard,
  renderSpinner,
  changeColor,
  renderEmptyCard,
} from './lib/index.js';

const END_POINT = 'https://jsonplaceholder.typicode.com/users';

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
        amount: 1,
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
  });
  // 삭제해도 화면에서 카드가 사라지지는 않음 => 하지만 데이터는 삭제됨
}
userCardInner.addEventListener('click', handleDeleteCard);
