const RemainGlassSpace = document.querySelector('.remain')
const FilledGlassSpace = document.querySelector('.water')
const GlassesList = document.querySelectorAll('.cup')

GlassesList.forEach((glass, idx) => {
  glass.addEventListener('click', () => {
    GlassesList.forEach((cup, index) => {
      if (index > idx) {
        cup.classList.remove('active')
      } else {
        cup.classList.add('active')
      }
    })
    CalcWater(idx)
  })
})

const CalcWater = (idx) => {
  const Target = 2000
  let current = Target - (idx + 1) * 250
  let percent = (current / 100) * 5
  RemainGlassSpace.innerHTML = `${current / 1000}L<br> Remained`
  RemainGlassSpace.style.height = `${percent}%`
  FilledGlassSpace.innerText = `${100 - percent}%`
  FilledGlassSpace.style.height = `${100 - percent}%`
}
