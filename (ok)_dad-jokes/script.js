// VARIABLES
const jokeEl = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

// EVENT LISTENERS
jokeBtn.addEventListener('click', generateJoke);

generateJoke();

// FUNCTIONS

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json'
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config);
  const data = await res.json();

  jokeEl.textContent = data.joke;
}

// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json'
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((response) => response.json())
//     .then((data) => {
//       jokeEl.textContent = data.joke
//     })
// }