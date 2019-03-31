const button = document.querySelector("#jokeGenerator");
const spinner = document.querySelector("#spinner");
const results = document.querySelector("#results");

button.addEventListener("click", jokes);

function jokes() {
  results.style.display = "none";
  spinner.style.display = "block";

  fetch("https://api.chucknorris.io/jokes/random")
    .then(res => res.json())
    .then(joke => {
      displayJoke(joke);
    });
}

function displayJoke(joke) {
  setTimeout(() => {
    spinner.style.display = "none";
    results.textContent = joke.value;
    results.style.display = "block";
  }, 500);
}
