console.log('hi');
function setup() {

	// var clientHeight = document.getElementById('p5-content').clientHeight;
	// var clientWidth = document.getElementById('p5-content').clientWidth;
	// var cnv = createCanvas(clientWidth, clientHeight);

    var clientHeight = document.getElementById('main-content').clientHeight;
	var clientWidth = document.getElementById('main-content').clientWidth;

    var cnv = createCanvas(clientWidth, clientHeight)
	// cnv.parent("main-content");
	// background(0);
}

function draw() {
    // console.log(mouseX);
    fill(255, 255, 255, 100)
    noStroke();
    ellipse(mouseX+50, mouseY+50, 50);
}

