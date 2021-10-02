const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let ActiveSlide = 0

rightBtn.addEventListener('click', () => {
  ActiveSlide++
  if (ActiveSlide > slides.length - 1) {
    ActiveSlide = 0
  }

  changeSlide()
})

leftBtn.addEventListener('click', () => {
  ActiveSlide--
  if (ActiveSlide < 0) {
    ActiveSlide = slides.length - 1
  }

  changeSlide()
})

function changeSlide() {
  changeActive()
  body.style.backgroundImage = slides[ActiveSlide].style.backgroundImage
}

const changeActive = () => {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
  slides[ActiveSlide].classList.add('active')
}
