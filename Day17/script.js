const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b9c1a14a1ffa8db243e73e33824ae427&page='

const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=b9c1a14a1ffa8db243e73e33824ae427&query="'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const MovieList = document.getElementById('List')
const form = document.getElementById('form')
const search = document.getElementById('search')

let Page = 2

getMovies(API_URL, 1, false)

async function getMovies(URL, Page = 1, Reset) {
  const res = await fetch(Reset ? URL : URL + Page)
  const result = await res.json()
  MakeMovie(result.results, Reset)
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const SearchTerm = search.value

  if (SearchTerm && SearchTerm !== '') {
    getMovies(SEARCH_URL + 'hard', 1, true)
    search.value = ''
  } else {
    window.location.reload()
  }
})

function MakeMovie(Movies, Reset) {
  if (Reset) {
    MovieList.innerHTML = ''
  }
  Movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie
    const movieEl = document.createElement('div')
    movieEl.classList.add('card')
    movieEl.innerHTML = `
      <div class="card-body">
        <img src="${IMG_PATH + poster_path}" alt="${title}" />
        <div class="card-info">
          ${overview}
        </div>
      </div>
      <div class="card-bottom">
        <div class="title">${title}</div>
        <span class="score ${SetClassByVote(
          vote_average
        )}">${vote_average}</span>
      </div>
    `
    MovieList.appendChild(movieEl)
  })
}

function SetClassByVote(Vote) {
  if (Vote >= 8) {
    return 'high'
  } else if (Vote <= 5) {
    return 'low'
  }
}

window.addEventListener('scroll', () => {
  if (
    window.scrollY + window.innerHeight + 100 >=
    document.documentElement.scrollHeight
  ) {
    getMovies(API_URL, Page, false)
    Page += 1
  }
})
