const detailContainer = document.querySelector(".details");
const title = document.getElementById("title");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const countryName = params.get("name");

const url = "https://restcountries.com/v3.1/name/" + countryName;

async function getCountry() {
  try {
    const response = await fetch(url);
    const country = await response.json();
    console.log(country);
    createHtml(country);
  } catch (error) {
    console.log("Something went wrong", error);
    detailContainer.innerHTML = "An error occured, please try again later.";
  }
}

getCountry();

function createHtml(country) {
  title.innerHTML = `${countryName}`;
  detailContainer.innerHTML = `<h1>${countryName}<h1>
  <ul>
  <li>Official name: ${country[0].name.official}</li>
   <li>Capital: ${country[0].capital}</li>
   <li>Population: ${country[0].population}</li>
   <li>Timezone: ${country[0].timezones}</li>
 </ul>`;
}
