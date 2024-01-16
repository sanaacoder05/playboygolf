//Create a reference for canvas 

//Give specific height and width to the car image
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var background_image = "Grass.jpg";


//Set initial position for a car image.

var carImage = new Image();
carImage.src = 'ball.png'; // replace with your car image path
carImage.width = 50; // replace with your desired width
carImage.height = 50; // replace with your desired height
var carX = 0;
var carY = 0;




var golfImage = new Image();
golfImage.src = 'golf.png'; // replace with your golf image path
golfImage.width = 80; // replace with your desired width
golfImage.height = 80; // replace with your desired height
var golfX = 730; // replace with your desired initial x-coordinate
var golfY = 510; // replace with your desired initial y-coordinate

function add() {
    var backgroundImage = new Image();
    backgroundImage.onload = function() {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(carImage, carX, carY, carImage.width, carImage.height);
        ctx.drawImage(golfImage, golfX, golfY, golfImage.width, golfImage.height); // draw the golf image
    };
    backgroundImage.src = background_image // replace with your background image path
}
window.addEventListener('keydown', my_keydown);

function my_keydown(e) {
    var key = e.keyCode;
    console.log(key);
    if(key == '38') { // ASCII for up arrow key
        up();
    } else if(key == '40') { // ASCII for down arrow key
        down();
    } else if(key == '37') { // ASCII for left arrow key
        left();
    } else if(key == '39') { // ASCII for right arrow key
        right();
    }

height = 1100;
width = 1000;
	if (carX-10 == golfX && carY-10 == golfY) {
        
        var conImageURL = 'con.jpeg'; // replace with your con image path
        document.body.style.backgroundImage = "url('" + conImageURL + "')";
        document.body.style.backgroundSize = height + "px " + width + "px"; 

        document.getElementById('hd3').innerHTML = "You have hit the goal!!!";
        canvas.remove(carImage);
        canvas.remove(golfImage);

      
    }
}

function up() {
    carY -= 10;
    add();
}

function down() {
    carY += 10;
    add();
}

function right() {
    carX += 10;
    add();
}

function left() {
    carX -= 10;
    add();
}