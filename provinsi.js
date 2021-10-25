const getData = async () => {
  try {
    const data = await fetch('https://api.kawalcorona.com/indonesia/provinsi');
    return data.json();
  } catch (error) {
    console.error(error);
  }
};

const renderData = async () => {
  try {
    const getApi = await getData();
    console.log(getApi);
  } catch (error) {
    console.error(error);
  }
};
renderData();
