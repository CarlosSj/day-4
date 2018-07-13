// for (var i = 0; i <= 1000; i++) {
//   document.querySelector('.container').innerHTML += "<div class='box'></div>";
// }

// var allBoxes = document.querySelectorAll('.box');

// for (var i = 0; i <= allBoxes.length; i = i + 2) {
//   allBoxes[i].style.background = "blue";
// }

document.querySelector("button").addEventListener('click', function () {
	var randomRed = Math.floor(Math.random() * 255);
	var randomBlue = Math.floor(Math.random() * 255);
	var randomGreen = Math.floor(Math.random() * 255);
	var Color = "rgb(" + randomRed + ", "+ randomGreen + ", " + randomBlue +")";
	document.querySelector("body").style.background  = Color;
	console.log("working");
	document.querySelector("html").color = Color;
});