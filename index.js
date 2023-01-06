let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homePoints = 0
let guestPoints = 0

function add1() {
  homePoints += 1
  homeScore.textContent = homePoints
}

function add2() {
  homePoints += 2
  homeScore.textContent = homePoints
}

function add3() {
  homePoints += 3
  homeScore.textContent = homePoints
}

function addOne() {
  guestPoints += 1
  guestScore.textContent = guestPoints
}

function addTwo() {
  guestPoints += 2
  guestScore.textContent = guestPoints
}

function addThree() {
  guestPoints += 3
  guestScore.textContent = guestPoints
}