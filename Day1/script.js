const ImageBoxes = document.querySelectorAll('.image-box')

ImageBoxes.forEach((item) => {
  item.addEventListener('click', () => {
    RemoveAllActiveClasses()
    item.classList.add('active')
  })
})

const RemoveAllActiveClasses = () => {
  ImageBoxes.forEach((item) => {
    item.classList.remove('active')
  })
}
