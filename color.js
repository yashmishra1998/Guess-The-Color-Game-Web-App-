var numberSquares = 6;
var colors = generateRandomColors(numberSquares);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var h1 = document.querySelector('h1');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('messageDisplay');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');
var modeButtons = document.querySelectorAll('.mode');

for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener('click', function() {
		modeButtons[0].classList.remove('selected');
		modeButtons[1].classList.remove('selected');
		this.classList.add('selected');
		this.textContent === 'Easy' ? (numberSquares = 3) : (numberSquares = 6);
		reset();
	});
}
function reset() {
	//generate all new colors
	colors = generateRandomColors(numberSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = 'Verdict';
	resetButton.textContent = 'new colors';
	// change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
	h1.style.background = 'dodgerblue';
}

// easyBtn.addEventListener("click", function() {
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numberSquares = 3;
//     colors = generateRandomColors(numberSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0 ; i < squares.length; i++){
//         if(colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else {
//             squares[i].style.display = "none";
//         }
//     }
// });
// hardBtn.addEventListener("click", function() {
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numberSquares = 6;
//     colors = generateRandomColors(numberSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0 ; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });

resetButton.addEventListener('click', function() {
	// //generate all new colors
	// colors = generateRandomColors(numberSquares);
	// // pick a new random color from array
	// pickedColor = pickColor();
	// colorDisplay.textContent = pickedColor;
	// messageDisplay.textContent = "Verdict"
	// this.textContent = "new colors"
	// // change colors of squares
	// for(var i = 0; i < squares.length; i++){
	//     squares[i].style.backgroundColor = colors[i];
	// }
	// h1.style.background = "dodgerblue";
	reset();
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//adding initial colors
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener('click', function() {
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = 'Correct!';
			resetButton.textContent = 'Play Again';
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = '#232323';
			messageDisplay.textContent = 'Try Again';
		}
	});
}

function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to match the given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 -255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 -255
	var b = Math.floor(Math.random() * 256);
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
