const getApiPositive = async () => {
  try {
    const posts = await fetch('https://api.kawalcorona.com/positif');
    preload.innerHTML = '';
    return posts.json();
  } catch (error) {
    console.log('getPosts', error);
    throw error;
  }
};

const getApiNegative = async () => {
  try {
    const posts = await fetch('https://api.kawalcorona.com/sembuh');
    return posts.json();
  } catch (error) {
    console.log('getPosts', error);
    throw error;
  }
};

const getApiDeath = async () => {
  try {
    const posts = await fetch('https://api.kawalcorona.com/meninggal');
    return posts.json();
  } catch (error) {
    console.log('getPosts', error);
    throw error;
  }
};

const getApiGlobal = async () => {
  try {
    const posts = await fetch('https://api.kawalcorona.com');
    return posts.json();
  } catch (error) {
    console.log('getPosts', error);
    throw error;
  }
};

const table = document.getElementById("table")
const title = document.getElementById("title")
const titleTable = document.getElementById("titleTable")
const card = document.getElementById("card")
const preload = document.getElementById("preload")

const renderData = async () => {
  const dataPositive = await getApiPositive();
  const dataNegatif = await getApiNegative();
  const dataDeath = await getApiDeath();
  const dataGlobal = await getApiGlobal();
  let i = 0;

  const data = [dataPositive, dataNegatif, dataDeath]
  
  data.forEach(element =>{
    createElement(element);
  })

  title.insertAdjacentHTML(
    'beforeend',
    `<h1 class="my-4">Data Global</h1>`
  )

  titleTable.insertAdjacentHTML(
    'beforeend',
    `<h1 class="my-4">Data Setiap Negara</h1>`
  )

  table.insertAdjacentHTML(
    'beforeend',
    `<thead class="table-secondary">
    <tr>
      <th scope="col">No</th>
      <th scope="col">Negara</th>
      <th scope="col">Positif</th>
      <th scope="col">Meninggal</th>
      <th scope="col">Sembuh</th>
    </tr>
  </thead>`
  )

  dataGlobal.forEach(element =>{
    i=i+1
    createElementGlobal(element,i)
  })
}

renderData()

const createElement = (element) =>{
  card.insertAdjacentHTML(
    'beforeend',
    `<div class="col">
    <div class="card w-100 border-primary bg-primary bg-gradient">
      <div class="card-body">
        <h5 class="card-title text-capitalize text-white">#${element.name}</h5>
        <h1 class="card-text fw-bold text-white">${element.value}</h1>
      </div>
    </div>
  </div>`
  )
}

const createElementGlobal = (element,i) =>{
  console.log(element)
  table.insertAdjacentHTML(
    'beforeend',
    `<tr>
    <th scope="row">${i}</th>
    <td>${element.attributes.Country_Region}</td>
    <td>${element.attributes.Confirmed}</td>
    <td>${element.attributes.Deaths}</td>
    <td>${element.attributes.Recovered}</td>
  </tr>`
  )
}
