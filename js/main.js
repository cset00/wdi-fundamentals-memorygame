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

var checkForMatch = function() {
		
		if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		} else {
		alert("Sorry, try again.");
		}
};

var flipCard = function (cardId) {
	checkForMatch();
	var flippedCard = cards[cardId];
	console.log("User flipped " + flippedCard.rank);
	console.log(flippedCard.suit);
	console.log(flippedCard.cardImage);
	cardsInPlay.push(flippedCard.rank);
};

flipCard(0);
flipCard(2);


