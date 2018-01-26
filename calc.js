var mc;
var mcTotal;

var frq; 
var frqTotal; 

var mcGrade;
var frqGrade;
var total; 
var ap;

// add colors 

function calculateGrade(mc, mcTotal, frq, frqTotal) {
  
mcGrade = (mc / mcTotal)*50;
frqGrade = (frq / frqTotal)*50;
total = mcGrade + frqGrade; 

if (total < 28) {
  ap = 1;
} else if (total < 47) {
  ap = 2;
  } else if (total < 67) {
  ap = 3;
  } else if (total < 85) {
  ap = 4; 
  } else {
  ap = 5;
}

console.log("MC Grade: " + mcGrade + '\n' + "Frq Grade: " + frqGrade + '\n' + "Total Score: " + total + '\n' + "AP Score: " + ap)

}
