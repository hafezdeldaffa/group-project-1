const fetch = require('cross-fetch');
// Or just: import 'cross-fetch/polyfill';
async function getApi() {
  fetch('https://api.kawalcorona.com/indonesia/provinsi')
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Bad response from server');
      }
      return res.json();
    })
    .then((data) => {
      const dataProv = data.map((item) => {
        console.log(item.attributes);
      });
      return dataProv;
    })
    .catch((err) => {
      console.error(err);
    });
}

getApi();
