//     file name: main.js
//        authors: Ryan Smith
//  date created: 03 Apr 2023
// date modified: 03 Apr 2023 (rsmith)

// description: Contains a class in which a button is displayed on screen. The
//              user clicks the button which changes its color randomly.


class Button {

// --------------------------------------------------------------------- ctor --
    constructor() {

        // RGB color values for button fill
        this.r = randomizeColor();
        this.g = randomizeColor();
        this.b = randomizeColor();

        // circle drawing information
        this.x = width / 2;
        this.y = height / 2;
        this.diameter = height / 3;

        console.log("constructor called:" +
                    " R: " + this.r +
                    " G: " + this.g +
                    " B: " + this.b);

    }

    draw() {
        // draw the circle to the user's screen
        noLoop();
        push(); // loads a style to be applied
        fill(this.r, this.g, this.b, 100);
        stroke(219, 219, 219);
        strokeWeight(this.diameter * 0.05);
        circle(this.x, this.y, this.diameter);
        pop(); // unloads the style
		loop();
    }

    changeColor() {
        // changes the fill color of the button

        this.r = randomizeColor();
        this.g = randomizeColor();
        this.b = randomizeColor();
        this.draw();

        console.log("changed color:" +
            " R: " + this.r +
            " G: " + this.g +
            " B: " + this.b);
    }

    over(x, y) {
        let distance = dist(x, y, this.x, this.y);

        console.log(
            "distance: " + (dist(x, y, this.x, this.y)).toFixed(2) +
            "\ndiameter: " + (this.diameter / 2).toFixed(2)
        );

        if (distance <= this.diameter / 2) {
            console.log("mouse is over button");
        } else {
            console.log("mouse is NOT over button");
        }

        return distance <= this.diameter / 2;
    }
}

function mouseClicked() {
    if (button.over(mouseX, mouseY)) {
        button.changeColor();
    }
}

let button; // create a global button

function setup() {

    // build the background of the screen
    createCanvas(windowWidth, windowHeight);
    background(0);

    console.log("built canvas:" +
                " width: " + windowWidth +
                " height: " + windowHeight);

    // build the button on the screen
    button = new Button();
    button.draw();

    // add the text to the screen
    push();
    textSize(64);
    textAlign(CENTER, CENTER);
    fill(219, 219, 219);
    text("Click the button", width / 2, height * 0.15);
    pop();
}

function draw() {
    // accept user clicks here
    console.log("waiting for click...")
    if (mouseIsPressed === true) {
        console.log("mouse was clicked")
        mouseClicked();
    }
}

function randomizeColor() {
    return Math.floor(Math.random() * 255);
}