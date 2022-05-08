const detailsContainer = document.querySelector(".details-results");

const title = document.querySelector(".title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const message = "Sorry, we do not have a website available";

console.log(id);

const url = "https://api.openbrewerydb.org/breweries/" + id;

async function fetchBrewery(){
    try{
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHTML(details);

        title.innerHTML = `${details.name}`;
    } 
    catch(error){
        console.log(error);
        detailsContainer.innerHTML = "An error has occured: " + ("error", error);
        detailsContainer.className = "error";
    }
}

function createHTML(details){

    if(details.website_url === null) {
        details.website_url = message;
    }         
    
    detailsContainer.innerHTML = 
                                  `<h1 class="company-name">${details.name}</h1>
                                  <div class="details">
                                  <div>City - ${details.city}</div>
                                  <div>Country - ${details.country}</div>
                                  <div>State - ${details.state}</div>
                                  <div id="website">Website - <a href="${details.website_url}">${details.website_url}</a></div>
                                  </div>`;              
}           

fetchBrewery();

// I wanted to remove the link if the brewery didnt have a website. But I didnt find a way to do it. I would really appreciate it if you could tell me how, if that is possible.

