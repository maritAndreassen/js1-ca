const url = "https://restcountries.com/v3.1/region/europe/";

const resultContainer = document.querySelector(".results");

async function getCountries() {
  try {
    const response = await fetch(url);
    const country = await response.json();

    resultContainer.innerHTML = "";

    country.forEach(function (country) {
      createHtml(country);
    });
  } catch (error) {
    console.log("Something went wrong", error);
    resultContainer.innerHTML = "An error occured, please try again later.";
  }
}

getCountries();

function createHtml(country) {
  resultContainer.innerHTML += `<section class="result">
       <ul>
         <li><b>Country name:</b> ${country.name.common}</li>
          <li><b>Capital:</b> ${country.capital}</li>
          <li><b>Language(s):</b> ${Object.values(country.languages)}</li>
        </ul>
        <button onclick="location.href='/details.html?name=${
          country.name.common
        }'">View details</button>
      </section>`;
}
