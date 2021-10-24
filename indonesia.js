const getApiIndonesia = async () => {
  try {
    const posts = await fetch('https://api.kawalcorona.com/indonesia');
    preload.innerHTML = '';
    return posts.json();
  } catch (error) {
    console.log('getPosts', error);
    throw error;
  }
};

const getApiProvince = async () => {
  try {
    const posts = await fetch('https://api.kawalcorona.com/indonesia/provinsi');
    return posts.json();
  } catch (error) {
    console.log('getPosts', error);
    throw error;
  }
};

const renderData = async () => {
  const getDataIndo = await getApiIndonesia();
  const data = Object.entries(getDataIndo[0]);

  const getDataProvince = await getApiProvince();
  console.log(getDataProvince)
  const dataProvince = Object.entries(getDataProvince);
  let i = 0;

  //title table
  titleTable.insertAdjacentHTML(
    'beforeend',
    `<h1 class="my-4">Data Setiap Provinsi</h1>`
  )

  //Thead table
  table.insertAdjacentHTML(
    'beforeend',
    `<thead class="table-secondary">
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
    createElement(element)
  });

  dataProvince.forEach(element => {
    i = i + 1
    createElementProvince(element,i)
  });
}

renderData()

const card = document.getElementById("card")
const title = document.getElementById("title")
const titleTable = document.getElementById("titleTable")
const table = document.getElementById("table")
const preload = document.getElementById("preload")

const createElement = (element) =>{

  if(element[0] === "name"){
    title.insertAdjacentHTML(
      'beforeend',
      `<h1 class="my-4">Data ${element[1]}</h1>`
    )
  }else{
    card.insertAdjacentHTML(
      'beforeend',
      `<div class="col">
      <div class="card w-100 border-primary bg-primary bg-gradient">
        <div class="card-body">
          <h5 class="card-title text-capitalize text-white">#${element[0]}</h5>
          <h1 class="card-text fw-bold text-white">${element[1]}</h1>
        </div>
      </div>
    </div>`
    )
  }
  
}

const createElementProvince = (element,i) =>{

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