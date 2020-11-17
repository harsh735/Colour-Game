var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares = 6;  //a variable whose value changes depending upon the mode
				

easyBtn.addEventListener("click", function(){
	numSquares = 3; //as we only need to generate 3 squares
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i< squares.length; i++){
		if(colors[i]){  //because in this function colors only has 3 items
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
		
	}
})


hardBtn.addEventListener("click", function(){
	numSquares = 6; //as we generate 6 squares for hard mode
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i< squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block"; 
		
	}
})




resetButton.addEventListener("click", function(){
	//generate all new colors
	//as it will reset the squares according to the mode on which "play again" button is clicked
	colors = generateRandomColor(numSquares); 
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colour of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue"; 
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
})



//try again or correct wala message
colorDisplay.textContent = pickedColor;


for(var i=0; i< squares.length; i++){
	//add inital colours to squares
	squares[i].style.background = colors[i];
	
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab colour of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColour
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	});
}






function changeColors(color){
	//loop through all squares
	for(var i = 0; i<squares.length; i++){
	//change each colour to match given color
	squares[i].style.backgroundColor = color;
	}
}


function pickColor(){
	var random  = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateRandomColor(num){
	//make an array
	var arr = []

	for(var i=0; i<num; i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return the array
	return arr;
}


function randomColor() {
	//pick a red from 0 to 255 and similarly for green and blue
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}