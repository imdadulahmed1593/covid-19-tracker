displayStaticResults();
function displayStaticResults() {
    const globalAffected = document.getElementById("global-affected");
    const globalRecovered = document.getElementById("global-recovered");
    const globalDeaths = document.getElementById("global-deaths");
    const BDAffected = document.getElementById("BD-affected");
    const BDRecovered = document.getElementById("BD-recovered");
    const BDDeaths = document.getElementById("BD-deaths");

    fetch("https://coronavirus-19-api.herokuapp.com/countries")
        .then(res => res.json())
        .then(data => {
            // console.log(data)

            globalAffected.innerText += ` ${data[0].cases}`;
            globalRecovered.innerText += ` ${data[0].recovered}`;
            globalDeaths.innerText += ` ${data[0].deaths}`;
        });


    fetch("https://coronavirus-19-api.herokuapp.com/countries/Bangladesh")
        .then(res => res.json())
        .then(data => {

            BDAffected.innerText += ` ${data.cases}`;
            BDRecovered.innerText += ` ${data.recovered}`;
            BDDeaths.innerText += ` ${data.deaths}`;
        });
}

document.getElementById("search-btn").addEventListener('click', function () {
    const searchValue = document.getElementById('search-value').value;

    fetch(`https://coronavirus-19-api.herokuapp.com/countries/${searchValue}`)
        .then(res => res.json())
        .then(data => {
            const searchResults = document.getElementById("search-results");
            searchResults.innerHTML =
                `<h1 class="text-center m-4">${data.country}</h1>
            <div class="row">
                <div class="col-md-4 total-result">
                    <h2 >Affected Total : ${data.cases}</h2>
                    <h4>Today : ${data.todayCases}</h4>
                </div>
                <div class="col-md-4 total-result">
                    <h2 >Recovered Total : ${data.recovered}</h2>
                    <h4>Active Patients : ${data.active}</h4>
                </div>
                <div class="col-md-4 total-result">
                    <h2 >Deaths Total : ${data.deaths}</h2>
                    <h4>Today : ${data.todayDeaths}</h4>
                </div>
            </div>`
        });
});

document.getElementById("search-value").addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        const searchValue = document.getElementById('search-value').value;

        fetch(`https://coronavirus-19-api.herokuapp.com/countries/${searchValue}`)
            .then(res => res.json())
            .then(data => {
                const searchResults = document.getElementById("search-results");
                searchResults.innerHTML =
                    `<h1 class="text-center m-4">${data.country}</h1>
            <div class="row">
                <div class="col-md-4 total-result">
                    <h2 >Affected Total : ${data.cases}</h2>
                    <h4>Today : ${data.todayCases}</h4>
                </div>
                <div class="col-md-4 total-result">
                    <h2 >Recovered Total : ${data.recovered}</h2>
                    <h4>Active Patients : ${data.active}</h4>
                </div>
                <div class="col-md-4 total-result">
                    <h2 >Deaths Total : ${data.deaths}</h2>
                    <h4>Today : ${data.todayDeaths}</h4>
                </div>
            </div>`
            });
    }
});