import "whatwg-fetch";

function parseJSON(response) {
  if (response.status === 204) return "";
  return response.json();
}

function checkStatus(response) {
  if (
    (response.status >= 200 && response.status < 300)
    || response.status === 500
  ) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function fetchWithTimeout(ms, promise) {
  //https://github.com/github/fetch/issues/175#issuecomment-125779262
  return new Promise(((resolve, reject) => {
    setTimeout(() => {
      const error = new Error("Request timeout");
      error.errors = [{ message: "Request timeout" }];
      error.errorLocation = window.location.href;
      reject(error);
    }, ms);
    promise.then(resolve, reject);
  }));
}

export function request(url, options, timeout = 50000) {
  const fetchUrl = url.indexOf("?") !== -1
    ? `${url}&time=${Date.now()}`
    : `${url}?time=${Date.now()}`;
  return fetchWithTimeout(timeout, fetch(fetchUrl, options))
    .then(checkStatus)
    .then(parseJSON);
}
