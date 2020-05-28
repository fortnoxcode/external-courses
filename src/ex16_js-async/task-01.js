async function myFetch(url = '', options = {}) {
  if (options.method && options.method.toUpperCase() !== 'GET' && options.method.toUpperCase() !== 'POST') {
    throw new Error('Only GET and POST methods are allowed');
  }
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.json = () => {
      return JSON.parse(xhr.responseText)
    }
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) {
        return; // <4 = not complited
      }
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr);
      } else {
        reject(xhr.status);
      }
    };
    xhr.open(options.method || 'GET', url);
    xhr.send(options.body || null);
  });
}

module.exports = myFetch;
