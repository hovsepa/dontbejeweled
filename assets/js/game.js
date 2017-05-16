// the showstarters
var goalNum = Math.floor(Math.random() * 120) + 19;
var crystalOne = Math.floor(Math.random() * 12) + 1;
var crystalTwo = Math.floor(Math.random() * 12) + 1;
var crystalThree = Math.floor(Math.random() * 12) + 1;
var crystalFour = Math.floor(Math.random() * 12) + 1;
var userScore = 0;
var wins = 0;
var losses = 0;

var quotes = [
  { name: "Conor McGregor",
    quote: "I don't feel pressure in a negative way. I like pressure. I feel excitement and calm at the same time. No pressure, no diamonds. I want pressure: pressure creates drama, creates emotion." },
  { name: "Conor McGregor",
    quote: "I don't feel pressure in a negative way. I like pressure. I feel excitement and calm at the same time. No pressure, no diamonds. I want pressure: pressure creates drama, creates emotion."
  }
];

//diamond quotes
console.log(goalNum);
// the funk
$('#crystal-one').on('click', function () {
  userScore += crystalOne;
  var pointsAdded = "+" + crystalOne;
  // show amount added
  $(this).animate({ opacity: .1 }, 100);
  // $('#points-added').text("+" + crystalOne).show();
  // setTimeout(function() { $('#points-added').hide(); }, 100);
  $(this).animate({ opacity: 1 }, 100);
  console.log(userScore);
  update();
  check();
});

$('#crystal-two').on('click', function () {
  userScore += crystalTwo;
  $(this).animate({ opacity: .1 }, 100);
  // $('#points-added').text("+" + crystalOne).show();
  // setTimeout(function() { $('#points-added').hide(); }, 100);
  $(this).animate({ opacity: 1 }, 100);
  console.log(userScore);
  update();
  check();
});

$('#crystal-three').on('click', function () {
  userScore += crystalThree;
  $(this).animate({ opacity: .1 }, 100);
  // $('#points-added').text("+" + crystalOne).show();
  // setTimeout(function() { $('#points-added').hide(); }, 100);
  $(this).animate({ opacity: 1 }, 100);
  console.log(userScore);
  update();
  check();
});

$('#crystal-four').on('click', function () {
  userScore += crystalFour;
  $(this).animate({ opacity: .1 }, 100);
  // $('#points-added').text("+" + crystalOne).show();
  // setTimeout(function() { $('#points-added').hide(); }, 100);
  $(this).animate({ opacity: 1 }, 100);
  console.log(userScore);
  update();
  check();
});

function update () {
  $('#target-score').text(goalNum);
  $('#current-score').text(userScore);
  $('#wins').text(wins);
  $('#losses').text(losses);
}


function check () {
  if (userScore === goalNum) {
    console.log("win");
    wins++;
    newGame();
  } else if (userScore > goalNum) {
    console.log("loss");
    losses++;
    newGame();
  }
}

function newGame () {
  goalNum = Math.floor(Math.random() * 120) + 19;
  crystalOne = Math.floor(Math.random() * 12) + 1;
  crystalTwo = Math.floor(Math.random() * 12) + 1;
  crystalThree = Math.floor(Math.random() * 12) + 1;
  crystalFour = Math.floor(Math.random() * 12) + 1;
  userScore = 0;
  update();
  console.log(goalNum);
}

newGame();
