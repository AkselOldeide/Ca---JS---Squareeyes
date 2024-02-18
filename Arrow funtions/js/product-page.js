const apiArray = []
const squareEyesAPI = "https://api.noroff.dev/api/v1/square-eyes"
const container = document.querySelector('.kort');

const urlParameter = new URLSearchParams(window.location.search)
const movieID = urlParameter.get("id")

function addToCart(x) {
    const storedValue = localStorage.getItem(x) === 'true';
    const changedState = !storedValue
    localStorage.setItem(x, changedState);

    if (changedState){
        console.log(`Produktet ${x} lagt til i handlekurv`)
    } else {
        console.log(`Produktet ${x} fjernet fra handlekurv`)
    }
}

fetch(squareEyesAPI)
    .then(function (HTTPresponse){
        return HTTPresponse.json()
    })
    .then(function(apiResult) {
        const apiArray = apiResult
        const selectedMovie = apiArray.find(item => item.id === movieID)

        if (selectedMovie){
            const filmPlakat = document.createElement('div');
            filmPlakat.classList.add('filmPlakat')
            filmPlakat.innerHTML = `
            <h2>${selectedMovie.title} (${selectedMovie.released})</h2>
            <img src="${selectedMovie.image}" width=200px, height=300px>
            <p>Genre: ${selectedMovie.genre}</p>
            <p>Release year: ${selectedMovie.released}</p>
            <p>IMDB Rating: ${selectedMovie.rating}</p>
            <button onclick="addToCart('${selectedMovie.id}')" class="add-to-cart-btn")"></button>
            `
            container.appendChild(filmPlakat)
        }
        else {
            console.log("Failure")
    }
    })

 