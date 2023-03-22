function search(){
    coutry=cname.value
    fetch(`https://restcountries.com/v2/name/${coutry}?fullText=true`).then(data=>data.json())
    .then(data=>displayData(data))
  }
  function displayData(countryDetails){
      countryName = countryDetails[0].name
      capital = countryDetails[0].capital
      population = countryDetails[0].population
      flag = countryDetails[0].flag
      currency = countryDetails[0].currencies[0].name
      symbol = countryDetails[0].currencies[0].symbol
      lang = countryDetails[0].languages[0].name
      result.innerHTML=`
      <div class="card container w-50 pt-3" >
          <img src="${flag}" class="card-img-top" alt="...">
          <ul class="list-group list-group-flush">
              <li class="list-group-item">Country name - ${countryName}</li>
              <li class="list-group-item">capital - ${capital}</li>
              <li class="list-group-item">population - ${population}</li>
              <li class="list-group-item">Language - ${lang}</li>
              <li class="list-group-item">Currency - ${currency}</li>
              <li class="list-group-item">Currency symbol - ${symbol}</li>
          </ul>

      </div>`
  }