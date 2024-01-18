const navbar = document.querySelector('.navbar')
const nav = document.querySelector('.nav-header')

navbar.addEventListener('click', () => {
  nav.classList.toggle('show')
})



// New Arrival

const buttonLeft = document.getElementById("arrow-left")
const buttonRight = document.getElementById("arrow-right")

const card1 = document.getElementById("card1")
const card2 = document.getElementById("card2")
const card3 = document.getElementById("card3")
const card4 = document.getElementById("card4")
const card5 = document.getElementById("card5")
const card6 = document.getElementById("card6")
const card7 = document.getElementById("card7")
const card8 = document.getElementById("card8")



buttonRight.addEventListener('click', () => {
  card1.classList.toggle('hide')
  card2.classList.toggle('hide')
  card3.classList.toggle('hide')
  card4.classList.toggle('hide')
  card5.classList.toggle('hide')
  card6.classList.toggle('hide')
  card7.classList.toggle('hide')
  card8.classList.toggle('hide')
  buttonRight.classList.add('selected')
  buttonRight.classList.remove('not-selected')
  buttonLeft.classList.remove('selected')
  buttonLeft.classList.add('not-selected')
})


buttonLeft.addEventListener('click', () => {
  card1.classList.toggle('hide')
  card2.classList.toggle('hide')
  card3.classList.toggle('hide')
  card4.classList.toggle('hide')
  card5.classList.toggle('hide')
  card6.classList.toggle('hide')
  card7.classList.toggle('hide')
  card8.classList.toggle('hide')
  buttonLeft.classList.add('selected')
  buttonLeft.classList.remove('not-selected')
  buttonRight.classList.add('not-selected')
  
})