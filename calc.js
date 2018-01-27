var mc = document.getElementById('mc')
var mcTotal = document.getElementById('mcTotal')

var frq = document.getElementById('frq')
var frqTotal = document.getElementById('frqTotal')

var mcGrade = document.getElementById('mcGrade')
var frqGrade = document.getElementById('frqGrade')
var total = document.getElementById('total')
var ap = document.getElementById('ap')

var button = document.getElementById('button')

button.addEventListener('click', function() {
  math(calculateAPGrade)
})

function math(callback) {
  var mcCalc = mc.value / mcTotal.value * 50
  var frqCalc = frq.value / frqTotal.value * 50
  totalScore = mcCalc + frqCalc
  callback(totalScore)

  mcGrade.innerHTML = mcCalc
  frqGrade.innerHTML = frqCalc
  total.innerHTML = totalScore
}

function calculateAPGrade(totalScore) {
  if (totalScore < 28) {
    ap.innerHTML = '1'
  } else if (totalScore < 47) {
    ap.innerHTML = '2'
  } else if (totalScore < 67) {
    ap.innerHTML = '3'
  } else if (totalScore < 85) {
    ap.innerHTML = '4'
  } else {
    ap.innerHTML = '5'
  }
}

// add colors
