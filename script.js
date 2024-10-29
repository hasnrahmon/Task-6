fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
    .then(res => res.json())
    .then(res => hasn(res))

let add = document.getElementById('root')

function hasn(res) {
    console.log(res);

    for (let index = 42; index < res.length; index++) {


        add.innerHTML += `
        <div class="card ">
        <img  src=${res[index].simple_thumb} alt="${res.title}"/>
         <h3 class=dd>${res[index].title}</h3>
        <p class=db>${res[index].author}</p>

        <h3 >${res[index].title}</h3>
        <p>${res[index].author}</p>
        </div>
        `

    }
}

fetch('https://wolnelektury.pl/api/books/studnia-i-wahadlo/')
    .then(res => res.json())
    .then(res => fun(res))

let Add2 = document.getElementById('root2')

function fun(res) {
    console.log(res);

    Add2.innerHTML = `
    <div class = "qqq">

      <div class="card ee mt-5 mb-5 d-flex flex-end">
        <img  src=${res.cover} />
      </div>  

      <div >
       <h2>${res.authors[0].name}</h2>
       <div class="vv"> </div>
       <p class= "mt-5">${res.title}</p>
       <div class="w-25">
       <p>${res.fragment_data.html}</p>
       </div>
       <h4 class= "mt-5"> Shop It Now <i class="fas fa-arrow-right" style="color: black;"></i></h4>
        
     
      </div>
     
    </div>
    
    `

}

fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
    .then(res => res.json())
    .then(res => fun2(res))

let Dom = document.getElementById('root3')

function fun2(res) {
    console.log(res);

    for (let index = 14; index < 22; index++) {


        Dom.innerHTML += `
        <div class="card ">
        <img  src=${res[index].simple_thumb} alt="${res.title}"/>
         <h3 class=dd>${res[index].title}</h3>
        <p class=db>${res[index].author}</p>

        <h3 >${res[index].title}</h3>
        <p>${res[index].author}</p>
        </div>
        `

    }
}
