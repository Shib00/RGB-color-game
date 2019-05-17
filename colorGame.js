var numSquares = 6;
var colors = [];
var correctColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	for(var i=0;i<modeButtons.length;i++){
			modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected"); 
			this.classList.add("selected"); 
			this.textContent === "Easy"?numSquares=3:numSquares=6;
			reset();
		});
	}

	for(var i=0; i<squares.length; i++){
		// add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
		// add event listeners to squares
		squares[i].addEventListener("click",function(){
			//grab color of picked square
			var pickedColor = this.style.backgroundColor;
			//compare to correctColor
			if(pickedColor === correctColor)
			{
				//display message
				message.textContent = "Correct!";
				//passing function changeColor if correct
				changeColor(pickedColor);
				//change h1 background
				h1.style.backgroundColor = pickedColor;
				//reset button asks play again
				resetButton.textContent = "Play again ?";	
			}
			else{
				//pickedColor = "#232323" won't work as it will change the picked value not the color of tile
				this.style.backgroundColor = "#232323";
				//display message
				message.textContent = "Try again";
	
			}
		});
}

		reset();
}





function reset(){
	//generate random colors
	colors = generateRandomColors(numSquares);
	//pick a new color from squares
	correctColor = pickColor();
	//change colorDisplay to match new correctColor
	colorDisplay.textContent = correctColor;

	resetButton.textContent = "New Colors";
	message.textContent = "";
	//change color of squares
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none" ;
		}
	}
	//change h1 background
	h1.style.backgroundColor = "steelBlue";
}

resetButton.addEventListener("click",function(){
	reset();
});



//function to change color of all squares
function changeColor(color){
	//loop through all squares
	for(var i=0; i<squares.length; i++){
		//match each color to given color
		squares[i].style.backgroundColor = color;
	}
	
}

//function to pick a random color out of colors array
function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

//function to generate random colors
function generateRandomColors(num){
	//generate array
	arr = [];
	//add random colors to array
	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 to 255
	var r = Math.floor(Math.random()*256);
	//pick a "green" from 0 to 255
	var g = Math.floor(Math.random()*256);
	//pick a "blue" from 0 to 255
	var b = Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";
}
