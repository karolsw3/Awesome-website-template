document.addEventListener('scroll', () => {
  var scroll = document.body.scrollTop
  Array.from(document.getElementsByClassName('revealOnScroll')).forEach((element, index) => {
    let rect = element.getBoundingClientRect()
    if (scroll > (rect.top + element.style.height)) {
      if (!element.classList.contains('revealAnimation')) {
        element.classList.add('revealAnimation')
      }
    }
  })
})
