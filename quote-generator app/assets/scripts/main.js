const apiURL = "https://api.gameofthronesquotes.xyz/v1/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuoteButton = document.getElementById("newQuoteButton");

async function getQuote(url) {
  const response = await fetch(url);
  const data = await response.json();
  quote.innerHTML = data.sentence;
  author.innerHTML = data.character.name;
  console.log(data, "daaaa");
}

newQuoteButton.addEventListener("click", () => {
  getQuote(apiURL);
});

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      " ---- by " +
      author.innerHTML,
    "Tweet Window",
    "width=600, height=300"
  );
}

getQuote(apiURL);
