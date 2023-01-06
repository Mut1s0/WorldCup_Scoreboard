let homeScore = document.getElementById("home-score")

let homePoints = 0

function add1() {
  console.log("clicked")
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