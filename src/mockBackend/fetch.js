// mockBackend/fetch.js

import DATA from "./data";

export function get(endpoint) {
  const delay = Math.floor(Math.random() * 1000) + 500;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!DATA.hasOwnProperty(endpoint)) {
        reject(`"${endpoint}" is an invalid endpoint.`);
      }
      resolve({ status: 200, data: DATA[endpoint] });
    }, delay);
  });
}
