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
  { name: "Lorde",
    quote: "But everybody's like Cristal, Maybach, diamonds on your timepiece. Jet planes, islands, tigers on a gold leash. We don't care." },
  { name: "ASAP Rocky",
    quote: "I have a Rolex, but no diamonds. Rappers wear diamonds to compensate for a lack of fashion sense. I don't even have pierced ears - I'm not into that; it's too much." },
  { name: "Nicky Oppenheimer",
    quote: "Diamonds are intrinsically worthless, except for the deep psychological need they fill." },
  { name: "Thomas Browne",
    quote: "Rough diamonds may sometimes be mistaken for worthless pebbles." },
  { name: "John Webster",
    quote: "Whether we fall by ambition, blood, or lust, like diamonds we are cut with our own dust." },
  { name: "Kate Spade",
    quote: "I buy so much fake jewelry, it's funny. It's not real. I don't wear real diamonds or anything." },
  { name: "Eartha Kitt",
    quote: "I'm a dirt person. I trust the dirt. I don't trust diamonds and gold." },
  { name: "Kaiser Chiefs",
    quote: "Ruby, Ruby, Ruby, Ruby. Do you, do you, do you, do you. Know what you're doing, doing, to me." }
];

// the functions
$('#crystal-one').on('click', function () {
  userScore += crystalOne;
  var pointsAdded = "+" + crystalOne;
  // show amount added
  $(this).animate({ opacity: .1 }, 300);
  $('#current-score').text("+" + crystalOne).css('z-index', 10);

  setTimeout(function() {

    $('.score-circle-current-click')
    .removeClass('score-circle-current-click')
    .addClass('score-circle-current');
    $('#current-score-text-val').show();

  }, 300);

  $('.score-circle-current')
    .removeClass('score-circle-current')
    .addClass('score-circle-current-click');
    $('#current-score-text-val').hide();

  $(this).animate({ opacity: 1 }, 300);

  setTimeout(function () {
    $('#current-score').text(userScore);
  }, 500);

  update();
  check();
});

$('#crystal-two').on('click', function () {
  userScore += crystalTwo;
  var pointsAdded = "+" + crystalTwo;
  // show amount added
  $(this).animate({ opacity: .1 }, 300);
  $('#current-score').text("+" + crystalTwo).css('z-index', 10);

  setTimeout(function() {

    $('.score-circle-current-click')
    .removeClass('score-circle-current-click')
    .addClass('score-circle-current');
    $('#current-score-text-val').show();

  }, 300);

  $('.score-circle-current')
    .removeClass('score-circle-current')
    .addClass('score-circle-current-click');
    $('#current-score-text-val').hide();

  $(this).animate({ opacity: 1 }, 300);

  setTimeout(function () {
    $('#current-score').text(userScore);
  }, 500);

  update();
  check();
});

$('#crystal-three').on('click', function () {
  userScore += crystalThree;
  var pointsAdded = "+" + crystalThree;
  // show amount added
  $(this).animate({ opacity: .1 }, 300);
  $('#current-score').text("+" + crystalThree).css('z-index', 10);

  setTimeout(function() {

    $('.score-circle-current-click')
    .removeClass('score-circle-current-click')
    .addClass('score-circle-current');
    $('#current-score-text-val').show();

  }, 300);

  $('.score-circle-current')
    .removeClass('score-circle-current')
    .addClass('score-circle-current-click');
  $('#current-score-text-val').hide();

  $(this).animate({ opacity: 1 }, 300);

  setTimeout(function () {
    $('#current-score').text(userScore);
  }, 500);

  update();
  check();
});

$('#crystal-four').on('click', function () {
  userScore += crystalFour;
  var pointsAdded = "+" + crystalFour;
  // show amount added
  $(this).animate({ opacity: .1 }, 300);
  $('#current-score').text("+" + crystalFour).css('z-index', 10);

  setTimeout(function() {

    $('.score-circle-current-click')
    .removeClass('score-circle-current-click')
    .addClass('score-circle-current');
    $('#current-score-text-val').show();

  }, 300);

  $('.score-circle-current')
    .removeClass('score-circle-current')
    .addClass('score-circle-current-click');
    $('#current-score-text-val').hide();

  $(this).animate({ opacity: 1 }, 300);

  setTimeout(function () {
    $('#current-score').text(userScore);
  }, 500);

  update();
  check();
});

function update () {
  $('#target-score').text(goalNum);
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

    $('#target-score-text-val').hide();
    $('#target-score').text("You Lose").css('z-index', 10);

    setTimeout(function () {
      $('.score-circle-target-click')
        .removeClass('score-circle-target-click')
        .addClass('score-circle-target');
      $('#target-score-text-val').show();
      $('#target-score').text(" ")
    }, 400);

    $('.score-circle-target')
      .removeClass('score-circle-target')
      .addClass('score-circle-target-click');

    losses++;
    setTimeout(newGame, 500);
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
  updateQuote();
  $('#current-score').text(userScore);
}

function updateQuote () {
  var randomNum = Math.floor(Math.random() * quotes.length);
  var quoteName = quotes[randomNum].name;
  var quoteQuote = quotes[randomNum].quote;
  $('#quote').html(quoteQuote + " - " + "<strong>" + quoteName + "</strong>");
}

newGame();
