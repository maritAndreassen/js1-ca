const detailContainer = document.querySelector(".details");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const json = "&fmt=json";
console.log(id);

const url = "http://musicbrainz.org/ws/2/artist/?query=artist:artists:" + id + json;

async function getArtist() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const artist = data.artists;

    console.log("Look at this", artist.id);
    createHtml(artist);
  } catch (error) {
    console.log("denne feila", error);
    detailContainer.innerHTML = "An error occured";
  }
}

getArtist();

function createHtml(artist) {
  detailContainer.innerHTML = `<h1>${artist}<h1>`;
  console.log(artist.id);
}
