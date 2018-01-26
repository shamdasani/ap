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
  calculateGrade(mc, mcTotal, frq, frqTotal)
  frq.innerHTML = ''
  frqTotal.innerHTML = ''
  mc.innerHTML = ''
  mcTotal.innerHTML = ''
})

function calculateGrade(mc, mcTotal, frq, frqTotal) {
  mcGrade.innerHTML = mc.value / mcTotal.value * 50
  frqGrade.innerHTML = frq.value / frqTotal.value * 50
  total.innerHTML = Number(mcGrade.innerHTML) + Number(frqGrade.innerHTML)
  total = Number(total.innerHTML)

  if (total < 28) {
    ap.innerHTML = '1'
  } else if (total < 47) {
    ap.innerHTML = '2'
  } else if (total < 67) {
    ap.innerHTML = '3'
  } else if (total < 85) {
    ap.innerHTML = '4'
  } else {
    ap.innerHTML = '5'
  }
}

// add colors
