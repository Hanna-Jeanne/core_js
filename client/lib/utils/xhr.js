//
const END_POINT = 'https://jsonplaceholder.typicode.com/users';
// const END_POINT = 'https://jsonplaceholder.typicode.com/users/2'; // DELETE

// [readyState]
// 0 : uninitialized - 초기화가 되지 않은 상태
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete => 성공 | 실패

// console.log(xhr);
// console.log(xhr.readyState);

/* ------------ 부연 설명 ------------ */

// GET 통신
// function xhr(method, url, success, fail) {
//   const xhr = new XMLHttpRequest();

//   xhr.open(method, url);

//   xhr.addEventListener('readystatechange', () => {
//     if (xhr.readyState === 4) {
//       if (xhr.status >= 200 && xhr.status < 400) {
//         const data = JSON.parse(xhr.response);

//         success(data);
//         // 모든 통신이 끝난 시점에 arguments -> data 값을 실어 보낸다.
//       } else {
//         fail({ message: '알 수 없는 오류가 발생했습니다.' });
//       }
//     }
//   });

//   xhr.send();
// }

// xhr(
//   'GET',
//   END_POINT,
//   (data) => {
//     // prameter -> data
//     console.log(data); // 값을 뽑아 쓸 수 있음
//   },
//   (err) => {
//     console.log(err.message);
//   }
// );

// POST 통신
// function xhr({
//   method = 'GET',
//   url = '',
//   success = null,
//   fail = null,
//   body = null,
//   headers = {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//   },
// } = {}) {
//   const xhr = new XMLHttpRequest();

//   xhr.open(method, url);

//   // 객체의 key, value를 분리 (Object, entries)
//   // 반복문

//   if (!method === 'DELETE') {
//     Object.entries(headers).forEach(([k, v]) => {
//       xhr.setRequestHeader(k, v);
//     });
//   }

//   // xhr.setRequestHeader( key, value);
// POST 통신은 open()을 보내고 setRequestHeader로 설명서를 보내야한다!

//   xhr.addEventListener('readystatechange', () => {
//     const { status, response, readyState } = xhr;

//     if (readyState === 4) {
//       if (status >= 200 && status < 400) {
//         const data = JSON.parse(response);
//         success(data);
//       } else {
//         fail({ message: '알 수 없는 오류가 발생했습니다.' });
//       }
//     }
//   });
//   xhr.send(JSON.stringify(body));
// }

// const obj = {
//   name: 'tiger',
//   age: 38,
// };

// xhr({
//   method: 'POST',
//   url: END_POINT,
//   success: (data) => {
//     console.log(data);
//   },
//   fail: () => {},
//   body: obj,
// });

/* -------------------------------------------- */
/*                   callback                   */
/* -------------------------------------------- */

function xhr({
  method = 'GET',
  url = '',
  success = null,
  fail = null,
  body = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
} = {}) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  if (!(method === 'DELETE')) {
    Object.entries(headers).forEach(([k, v]) => {
      xhr.setRequestHeader(k, v);
    });
  }

  xhr.addEventListener('readystatechange', () => {
    const { status, response, readyState } = xhr;

    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        const data = JSON.parse(response);
        success(data);
      } else {
        fail({ message: '알 수 없는 오류가 발생했습니다.' });
      }
    }
  });
  xhr.send(JSON.stringify(body));
}

const obj = {
  name: 'tiger',
  age: 38,
};

// xhr({
//   method:"DELETE",
//   url: END_POINT,
//   success: (data)=>{
//     console.log( data );
//   },
//   fail: ()=>{},
// })

//

xhr.get = (url, success, fail) => {
  xhr({ url, success, fail });
};

xhr.post = (url, body, success, fail) => {
  xhr({
    method: 'POST',
    url,
    body,
    success,
    fail,
  });
};

xhr.put = (url, body, success, fail) => {
  xhr({
    method: 'PUT',
    url,
    body,
    success,
    fail,
  });
};

xhr.delete = (url, success, fail) => {
  xhr({
    method: 'DELETE',
    url,
    success,
    fail,
  });
};

// xhr.delete(
//   END_POINT,
//   (data)=>{
//     console.log( data );
//   },
//   ()=>{

//   }
// )

/* -------------------------------------------- */
/*                    promise                   */
/* -------------------------------------------- */

// mixin

const defaultOptions = {
  method: 'GET',
  url: '',
  body: null,
  errorMessage: '서버와의 통신이 원활하지 않습니다.',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

//
export function xhrPromise(options = {}) {
  const { method, url, errorMessage, body, headers } = {
    ...defaultOptions,
    ...options,
    headers: {
      // 깊은 복사를 위해
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  if (!(method === 'DELETE')) {
    Object.entries(headers).forEach(([k, v]) => {
      xhr.setRequestHeader(k, v);
    });
  }

  xhr.send(body ? JSON.stringify(body) : null);

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        // complete
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({ message: '데이터 통신이 원활하지 않습니다.' });
        }
      }
    });
  });
}

// xhrPromise({
//   method: 'GET',
//   url: END_POINT,
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//

xhrPromise.get = (url) => xhrPromise({ url });
xhrPromise.post = (url, body) => xhrPromise({ url, body, method: 'POST' });
xhrPromise.put = (url, body) => xhrPromise({ url, body, method: 'PUT' });
xhrPromise.delete = (url) => xhrPromise({ url, method: 'DELETE' });

// xhrPromise
//   .get(END_POINT)
//   .then((res) => {
//     console.log(res);

//     res.forEach(({ website }) => {
//       const tag = `
//         <div>site : ${website}</div>
//       `;

//       document.body.insertAdjacentHTML('beforeend', tag);
//     });
//   })
//   .then(() => {})
//   .catch(() => {});

// xhrPromise.put()
// xhrPromise.delete()

/* -------------------------------------------- */
/*                    종합 설명 🌟                 */
/* -------------------------------------------- */

// const str = 'aa'
// const str = new String('aa')

//

// const data = {
//   method: 'GET',
// };

// const END_POINT = 'https://jsonplaceholder.typicode.com/users';

// function xhr(options) {
//   const { method, url } = { ...data, ...options };

//   const xhr = new XMLHttpRequest();

//   xhr.open(method, url);
//   xhr.setRequestHeader('Content-Type', 'application/json');
//   xhr.send();
//   return new Promise((resolve, reject) => {
//     xhr.addEventListener('readystatechange', () => {
//       if (xhr.readyState === 4) {
//         if (xhr.status >= 200 && xhr.status < 400) {
//           const data = JSON.parse(xhr.response);
//           resolve(data);
//         } else {
//           reject('실패');
//         }
//       }
//     });
//   });
// }

// xhr({
//   method: 'GET',
//   url: END_POINT,
// }).then((result) => {
//   // console.log( result );
// });

// const p = new Promise((resolve, reject) => {
//   if (false) {
//     resolve('오예!');
//   } else {
//     reject('오예!'); // 에러 터짐
//   }
// });

// p.then((res) => {
//   console.log(res);
// })
//   .then(
//     (res) => {
//       console.log(res);
//     },
//     (err) => {
//       console.log(err);
//     }
//   )
//   .then((res) => {
//     console.log(res);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const defaultOptions = {
//   timeout: 1000,
//   data: '더미 데이터',
// };

// function delayP(options) {
//   let config = { ...defaultOptions };

//   if (typeof options === 'number') {
//     config.timeout = options;
//   }

//   if (typeof options === 'object') {
//     config = { ...defaultOptions, ...options };
//   }

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(data);
//     }, config.timeout);
//   });
// }

// delayP().then((res) => {
//   console.log(res);
// });

/* ------------------------------------------------ */
/*                함수를 매서드처럼 사용 🌟               */
// /* ------------------------------------------------ */
// function num(a, b, value) {
//   return a + value + b;
// }

// num.multi = (a, b) => {
//   return num(a, b, '곱하기');
// };

// num.division = (a, b) => {
//   return num(a, b, '나누기');
// };

// const p = new Promise((f, c) => {
//   f('a');
// });

// console.log(num.multi(2, 3));
// console.log(num.division(10, 5));

// console.log(num(1, 2, '더하기'));
