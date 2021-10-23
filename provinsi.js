const getApi = async () => {
  try {
    const posts = await fetch('https://api.kawalcorona.com/indonesia/provinsi');
    return posts.json();
  } catch (error) {
    console.log('getPosts', error);
    throw error;
  }
};

const table = document.getElementById("table")

const renderData = async () => {
  const getData = await getApi();
  const data = Object.entries(getData);
  let i = 0;

  //Thead
  table.insertAdjacentHTML(
    'beforeend',
    `<thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Provinsi</th>
      <th scope="col">Meninggal</th>
      <th scope="col">Positif</th>
      <th scope="col">Sembuh</th>
    </tr>
  </thead>`
  )

  data.forEach(element => {
    i = i + 1
    console.log(element)
    createElement(element,i)
  });
}

renderData()

const createElement = (element,i) =>{
  table.insertAdjacentHTML(
    'beforeend',
    `<tr>
    <th scope="row">${i}</th>
    <td>${element[1].attributes.Provinsi}</td>
    <td>${element[1].attributes.Kasus_Meni}</td>
    <td>${element[1].attributes.Kasus_Posi}</td>
    <td>${element[1].attributes.Kasus_Semb}</td>
  </tr>`
  )
}
