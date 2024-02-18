const apiArray = []
const squareEyesAPI = "https://api.noroff.dev/api/v1/square-eyes"
const container = document.querySelector('.kort');

fetch(squareEyesAPI)
    .then(function (HTTPresponse){
        return HTTPresponse.json()
    })
    .then(function(apiResult) {
        const apiArray = apiResult
        console.log(apiArray)
        apiArray.forEach(item => {
            const card = document.createElement('a');
            card.classList.add('card');
            card.href = `product-page.html?id=${item.id}`
            card.innerHTML = `
            <div>
                <figure>
                    <img src="${item.image}" class="card-image">
                </figure>
                <div>
                    <h2>Title: ${item.title}</h2>
                    <p class="info-text">Genre: ${item.genre}</p>
                    <p class="info-text">Release year: ${item.released}</p>
                </div>
            </div>
            `;

           // card.style.backgroundImage = `url(${item.image})`;
           
            container.appendChild(card);
        })
    },
); or 


function filtering(){
    const filterList = apiArray.filter(item => item.genre.to)
}