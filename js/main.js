console.log("Up and running!");
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank:"king",
	suit:"hearts",
	cardImage:"images/king-of-hearts.png"
},
{
	rank:"king",
	suit:"diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];
var userScore = 0;
var score = document.getElementById('score');


var addToScore = function () {
	userScore+=50;
	score.innerHTML = userScore;
	console.log("HELLOOO I ADDED SOME SCORE");
};


var checkForMatch = function () {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		console.log(cardsInPlay);
		addToScore();

		} else {
		alert("Sorry, try again.");
		console.log(cardsInPlay);
		
		//I think this below is causing the second card to not flip?
		createBoard();
		};

		cardsInPlay = [];
	}
};

var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	var flippedCard = cards[cardId];
	this.setAttribute('src', flippedCard.cardImage);
	cardsInPlay.push(flippedCard.rank);
	this.removeEventListener('click',flipCard);
	console.log("User flipped " + flippedCard.rank);
	console.log(flippedCard.suit);
	console.log(flippedCard.cardImage);

	setTimeout(checkForMatch(),10000);
	
};


var createBoard = function(){
	cardsInPlay = [];


	document.getElementById('game-board').innerHTML="";
	for (var i=0; i<cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
		

	}
};

var resetFunction = function () {
	cards.sort(function(a, b){return 0.5 - Math.random()});
	createBoard();
	userScore = 0;
	score.innerHTML = userScore;
};

createBoard();
document.getElementById('resetButton').addEventListener('click',resetFunction);





