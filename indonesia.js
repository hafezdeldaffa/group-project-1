const fetch = require('cross-fetch');

async function getApi() {
  fetch('https://api.kawalcorona.com/indonesia')
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Bad response from server');
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

getApi();