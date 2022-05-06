const url = "https://api.openbrewerydb.org/breweries";

const errormessage = document.querySelector(".error");

const resultsContainer = document.querySelector(".results");

async function getApi(){
    try{
        const response = await fetch(url);
        const results = await response.json();

        console.log(results);
    
        resultsContainer.innerHTML = "";

    for(let i = 0; i < results.length; i++){
        
        resultsContainer.innerHTML += `<div class="myresults">
                            <h2> ${results[i].name}</h2>
                            <h3>Brewery type - ${results[i].brewery_type}</h3>
                            <h4>Id - ${results[i].id}</h4>
                            <p><a href="details.html?id=${results[i].id}">View more</a></p>
                            </div>`;

                            console.log(results[i])
    }
    }
    catch(error){
        console.log(error);
        resultsContainer.innerHTML = "An error has occured: " + ("error", error);
        resultsContainer.className = "error";
    }
}
getApi();