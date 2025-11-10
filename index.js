let menu = document.querySelector('.js-menu')
let popUpMenu = document.querySelector('.pop-up-menu')
let closeButton = document.querySelector('.js-close')

menu.addEventListener('click', () => {
  if (+popUpMenu.style.zIndex === -1) {
    popUpMenu.style.zIndex = '1'
  } else {
    popUpMenu.style.zIndex = '-1'
  }
})
closeButton.addEventListener('click', () => {
  popUpMenu.style.zIndex = -1
})
