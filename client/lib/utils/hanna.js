//

// console.log('hanna');

//

const END_POINT = 'https://jsonplaceholder.typicode.com/users';

// fetch 함수 실행 =>  promise 객체!!!
// const response = fetch(END_POINT);

// await fetch 함수 실행 =>  response 객체 (result를 얻을 수 있음)
// 기본적으로 GET 통신
// const response = await fetch(END_POINT, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ name: 'tiger', age: 33 }),
// });
// console.log(response);

// console.log(response.json()); // promise 객체를 반환

// console.log(await response.json()); // 진짜 데이터를 반환 (result를 얻을 수 있음)
// const data = await response.json();
// console.log(data);

//

// 함수로 만들기

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const hanna = async (options) => {
  // const { url, method } = { ...defaultOptions, ...options };
  const { url, ...rest } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    }, // 깊은 복사
  };

  const response = await fetch(url, rest);
  // console.log(response); // 확인용!

  if (response.ok) {
    response.data = await response.json();
    // response에 data라는 키를 만들어 집어 넣음
  }

  return response;
};

// const response = await hanna({ url: END_POINT });

hanna.get = (url, options) => {
  return hanna({
    url,
    ...options,
  });
};

hanna.post = (url, body, options) => {
  return hanna({
    method: 'POST',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

hanna.put = (url, body, options) => {
  return hanna({
    method: 'PUT',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

hanna.patch = (url, body, options) => {
  return hanna({
    method: 'PATCH',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

hanna.delete = (url, options) => {
  return hanna({
    method: 'DELETE',
    url,
    ...options,
  });
};

// (async function () {
//   const response = await hanna.delete(END_POINT + '/1');

//   console.log(response.data);
// })();

// 이제 아래처럼 꺼내 쓸 수 있음
// hanna.get()
// hanna.put()
// hanna.delete()

/* ------- 참고 ------- */

function getGeolocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((data) => {
      const { latitude: lat, longitude: long } = data.coords;
      resolve({ lat, long });
    });
  });
}

// const data = await getGeolocation();

// console.log( data );
