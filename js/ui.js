export class Ui {
    displayGames(data) {
        let gameCard = ``;
        for(let i =0; i< data.length; i++) {
            gameCard += `<div class="col">
                            <div data-id="${data[i].id}" class="card h-100 bg-transparent" role="button">
                                <div class="card-body">
                                    <figure class="position-relative">
                                        <img src="${data[i].thumbnail}" class="card-img-top object-fit-cover h-100" alt="game photo no">
                                    </figure>
                                    <figcaption>
                                        <div class="hstack justify-content-between">
                                            <h3 class="h6 small">${data[i].title}</h3>
                                            <span class="badge text-bg-primary p-2">Free</span>
                                        </div>
                                        <p class="card-text small text-center opacity-50 text-white">
                                        ${data[i].short_description.split(" ", 8)}
                                        </p>
                                    </figcaption>
                                </div>
                                <footer class="card-footer small hstack justify-content-between">
                                    <span class="badge badge-color text-white">${data[i].genre}</span>
                                    <span class="badge badge-color text-white">${data[i].platform}</span>
                                </footer>
                            </div>
                        </div>`;
        }
        document.getElementById("gameData").innerHTML = gameCard;
    }
    
    displayDetails(data) {
        const dataContent = `<div class="col-md-4">
                                <img src="${data.thumbnail}" class="w-100" alt="image details">
                            </div>
                            <div class="col-md-8">
                                <h3>Title: ${data.title}</h3>
                                <p>Category: <span class="badge text-bg-info">${data.genre}</span></p>
                                <p>Platform: <span class="badge text-bg-info">${data.platform}</span></p>
                                <p>Status: <span class="badge text-bg-info">${data.status}</span></p>
                                <p class="small">${data.description}</p>
                                <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
                            </div>`;
    document.getElementById("detailsContent").innerHTML = dataContent;
    }

}