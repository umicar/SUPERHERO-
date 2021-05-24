canvas = new fabric.Canvas("myCanvas");
block_image_height = 30;
block_image_width = 30;

player_x = 10;
player_y = 10;

var player_image_object = "";
var block_image_object = "";

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.ShiftKey == true && keyPressed == '80') {
        console.log("Shift and p key pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (e.ShiftKey == true && keyPressed == '77') {
        console.log("Shift and m key pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
}
    

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_image_object = Img;
        player_image_object.scaleToWidth(150);
        player_image_object.scaleToHeight(140);
        player_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_image_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}


window.addEventListener("keydown",myKeydown);
function myKeydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
if(keyPressed == "70") 
{
    new_image('ironman_face.png');
    console.log ("f");
}

if(keyPressed == "66") 
{
    new_image('hulkd_body.png');
    console.log ("b");
}

if(keyPressed == "76") 
{
    new_image('spiderman_legs.png');
    console.log ("l");
}

if(keyPressed == "82") 
{
    new_image('thor_right_hand.png');
    console.log ("r");
}

if(keyPressed == "72") 
{
    new_image('thor_left_hand.png');
    console.log ("h");
}
if (keyPressed == '37') {
    console.log("left arrow key is pressed");
    left();
}

if (keyPressed == '38') {
    console.log("up arrow key is pressed");
    up();
}

if (keyPressed == '39') {
    console.log("right arrow key is pressed");
    right();
}

if (keyPressed == '40') {
    console.log("down arrow key is pressed");
    down();
}
}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        console.log("when up arrow key is pressed, x = " + player_x + ", y = " + player_y);
        canvas.remove(player_image_object);
        player_update();
    }
}

function down() {
    if (player_y <= 500){
        player_y = player_y + block_image_height;
        console.log("when down arrow key is pressed, x = " + player_x + ", y = " + player_y);
        canvas.remove(player_image_object);
        player_update();
    }
}

function left() {
    if (player_x >= 0){
        player_x = player_x - block_image_width;
        console.log("when left arrow key is pressed, x = " + player_x + ", y = " + player_y);
        canvas.remove(player_image_object);
        player_update();
    }
}

function right() {
    if (player_x <= 900){
        player_x = player_x + block_image_width;
        console.log("when right arrow key is pressed, x = " + player_x + ", y = " + player_y);
        canvas.remove(player_image_object);
        player_update();
    }
}
