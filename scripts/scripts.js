document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {
  displayMeme();
}

// a comment to demonstrate a change to the file
async function displayMeme() {
  try {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const jsonResponse = await response.json();

    console.log(jsonResponse);

    const meme = jsonResponse.data.memes[3];

    const image = document.createElement("img");
    image.src = meme.url;
    image.alt = meme.name;
    image.width = 200;

    const memeContainer = document.querySelector("#meme");
    memeContainer.appendChild(image);
  } catch(error) {
    console.log("Promise failed", error);
  }
}