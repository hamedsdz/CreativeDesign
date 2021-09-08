const label = document.getElementById('search_label')
const searchBar = document.getElementById('searchbar')
const container = document.querySelector('.container')

label.addEventListener('click', () => {
  ToggleHide()
})

searchBar.addEventListener('focusout', () => {
  ToggleHide()
})

const ToggleHide = () => {
  searchBar.classList.toggle('hide')
  container.classList.toggle('hide')
}
