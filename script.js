
const grid = document.getElementById("grid")

axios.get("https://lanciweb.github.io/demo/api/pictures/")



.then(function(risultato){
    const tutteleFoto = risultato.data;

    tutteleFoto.forEach(function(foto){
        const card = `
        <div class= "ms-col">
           <div class="main-card">
           <div class="card-img">
            <img src="${foto.url}" alt="">
           </div>
            <div class="contenuto-card py-3">
                <p>${foto.date}</p>
                <p>${foto.title}</p>
            </div>
        </div>
       
      </div>
          
        `

        grid.innerHTML += card
})
})