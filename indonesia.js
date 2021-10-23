const getApiIndonesia = async () => {
  try {
    const posts = await fetch('https://api.kawalcorona.com/indonesia');
    return posts.json();
  } catch (error) {
    console.log('getPosts', error);
    throw error;
  }
};

const getApiGlobal = async () => {
  try {
    const posts = await fetch('https://api.kawalcorona.com/positif');
    return posts.json();
  } catch (error) {
    console.log('getPosts', error);
    throw error;
  }
};


const renderData = async () => {
  const getDataIndo = await getApiIndonesia();
  const data = Object.entries(getDataIndo[0]);

  const getDataGlobal = await getApiGlobal();
  console.log(getDataGlobal)

  data.forEach(element => {
    createElement(element)
  });
}

renderData()

const card = document.getElementById("card")
const title = document.getElementById("title")
console.log(card)
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