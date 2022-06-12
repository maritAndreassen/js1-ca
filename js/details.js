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
    console.log("hey there", country);
    createHtml(country);
  } catch (error) {
    console.log("denne feila", error);
    detailContainer.innerHTML = "An error occured";
  }
}

getCountry();

function createHtml(country) {
  title.innerHTML = `${countryName}`;
  detailContainer.innerHTML = `<h1>${countryName}<h1>
  <ul>
   <li>Capital: ${country[0].area}</li>
   <li>Population: ${country[0].population}</li>
   <li>Currencies: ${country[0].startOfWeek}</li>
   <li>Timezone: ${country[0].timezones}</li>
 </ul>`;
}
