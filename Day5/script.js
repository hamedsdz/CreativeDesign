const ArticleImage = document.querySelector('.image')
const LoadingText = document.querySelector('.loading')

let loadVal = 0

let interval = setInterval(Blurring, 40)

function Blurring() {
  loadVal++
  if (loadVal > 99) {
    clearInterval(interval)
  }
  LoadingText.innerText = `${loadVal} %`
  LoadingText.style.opacity = `${(100 - loadVal) / 100}`
  ArticleImage.style.filter = `blur(${100 / loadVal}px)`
}
