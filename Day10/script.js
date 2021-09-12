const jokePnl = document.getElementById('joke')
const btn = document.getElementById('btnJoke')

getJoke()

function getJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
  fetch('https://icanhazdadjoke.com/', config)
    .then((res) => res.json())
    .then((data) => {
      jokePnl.innerHTML = data.joke
    })
}

btn.addEventListener('click', () => {
  getJoke()
})
