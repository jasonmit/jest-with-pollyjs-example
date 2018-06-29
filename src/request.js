module.exports = function request(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function() {
      resolve(xhr);
    });

    xhr.addEventListener('error', reject);
    xhr.open('GET', url, true);
    xhr.send();
  });
};
