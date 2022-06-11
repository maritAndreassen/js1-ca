const options = {
  method: "GET",
  headers: "Content-Type: application/json;",
};
const url = `http://musicbrainz.org/ws/2/artist/?query=artist&fmt=json`;

const resultContainer = document.querySelector(".results");

async function getArtists() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const artists = data.artists;
    console.log("Første stopp", artists);
    console.log("Andre stopp", artists.aliases);
    resultContainer.innerHTML = "";

    for (let i = 0; i < artists.length; i++) {
      var artistName = artists[i].name;
      var artistScore = artists[i].score;
      var artistType = artists[i].type;

      // if (artistsListName === "Unknown Artist") {
      // return null;
      // }

      resultContainer.innerHTML += `<ol class="result">
    <li>Artist name: ${artistName}</li>
    <li>Score: ${artistScore}</li>
    <li>Type: ${artistType}</li>
    </ol>`;
    }
  } catch (error) {
    console.log("denne feila", error);
    resultContainer.innerHTML = "An error occured";
  }
}

getArtists();
