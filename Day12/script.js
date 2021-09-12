const faqBtnList = document.querySelectorAll('.btn-toggle')

faqBtnList.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.parentNode.classList.toggle('active')
  })
})
