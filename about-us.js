const faq =  document.getElementById("faq")
const form = document.getElementById("button")
const question = document.getElementById("question")


form.addEventListener("click",(event) =>{
    event.preventDefault();

    faq.insertAdjacentHTML(
        'beforeend',
        `
        <div class="card w-100 border-primary bg-primary bg-gradient my-2">
          <div class="card-body">
            <h5 class="card-title text-capitalize text-white">${question.value}</h5>
          </div>
        </div>
        `
    )
})