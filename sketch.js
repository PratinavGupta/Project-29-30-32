var backgroundImg;

score = 0;

function preload() {
	polyimg = loadImage("sprites/polygon.png");
	live_time();
}

function setup() {
	createCanvas(900, 400);
	engine = Matter.Engine.create();
	world = engine.world;

	rectMode(CENTER);
	ground = new GROUND(360, 330, 170, 15);
	ground2 = new GROUND(760, 200, 120, 15);

	box1 = new BOX(300, 280);
	box2 = new BOX(330, 280);
	box3 = new BOX(360, 280);
	box4 = new BOX(390, 280);
	box5 = new BOX(420, 280);
	box6 = new BOX(315, 250);
	box7 = new BOX(345, 250);
	box8 = new BOX(375, 250);
	box9 = new BOX(405, 250);
	box10 = new BOX(330, 220);
	box11 = new BOX(360, 220);
	box12 = new BOX(390, 220);
	box13 = new BOX(345, 190);
	box14 = new BOX(375, 190);
	box15 = new BOX(360, 160);
	box16 = new BOX(730, 160);
	box17 = new BOX(760, 160);
	box18 = new BOX(790, 160);
	box19 = new BOX(745, 130);
	box20 = new BOX(775, 130);
	box21 = new BOX(760, 100);

	polygon = Matter.Bodies.rectangle(100, 200, 50, 50);
	Matter.World.add(world, polygon);

	rope = new ROPE(this.polygon, { x: 100, y: 200 });

	Matter.Engine.run(engine);
}


function draw() {
	if (backgroundImg)
		background(backgroundImg);

	Matter.Engine.update(engine);

	box1.score();
	box2.score();
	box3.score();
	box4.score();
	box5.score();
	box6.score();
	box7.score();
	box8.score();
	box9.score();
	box10.score();
	box11.score();
	box12.score();
	box13.score();
	box14.score();
	box15.score();
	box16.score();
	box17.score();
	box18.score();
	box19.score();
	box20.score();
	box21.score();
	ground.display();
	ground2.display();
	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();
	box7.display();
	box8.display();
	box9.display();
	box10.display();
	box11.display();
	box12.display();
	box13.display();
	box14.display();
	box15.display();
	box16.display();
	box17.display();
	box18.display();
	box19.display();
	box20.display();
	box21.display();
	rope.display();

	textSize(20);
	fill("white")
	text("score  " + score, 800, 50)



	imageMode(CENTER);
	image(polyimg, polygon.position.x, polygon.position.y, 50, 50);

	drawSprites();
}

function mouseDragged() {
	Matter.Body.setPosition(polygon, { x: mouseX, y: mouseY })
}
function mouseReleased() {
	rope.shoot();
}

function keyPressed() {
	if (keyDown("space"))
		rope.join(polygon);
}

async function live_time() {
	var q = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
	var w = await q.json();
	var e = w.datetime;
	var r = e.slice(11, 13);

	if (r >= 06 && r <= 18)
		backgroundImg = loadImage("sprites/background.png")
	else
		backgroundImg = loadImage("sprites/background2.png");

}