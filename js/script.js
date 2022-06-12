const json = "&fmt=json";
const url = "http://musicbrainz.org/ws/2/artist/?query=artist" + json;

const resultContainer = document.querySelector(".results");

async function getArtists() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const artists = data.artists;

    console.log("Første data", data);
    console.log("Første artists", artists);
    resultContainer.innerHTML = "";

    artists.forEach(function (artist) {
      if (artist.name === "[no artist]") {
        artist.name = "no name";
      }
      console.log("IIIIIIIID", artist.id);
      createHtml(artist);
    });
  } catch (error) {
    console.log("denne feila", error);
    resultContainer.innerHTML = "An error occured";
  }
}

getArtists();

function createHtml(artist) {
  resultContainer.innerHTML += `<section class="result">
       <ul>
         <li>Artist name: ${artist.name}</li>
          <li>Score: ${artist.score}</li>
          <li>Type: ${artist.type}</li>
        </ul>
        <button onclick="location.href='/details.html?id=${artist.id}'">View details</button>
      </section>`;
}
