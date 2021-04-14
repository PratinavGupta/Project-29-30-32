class BOX {
    constructor(x, y) {
        var prop = { 'restitution': 0.8, mass: 0.01 }
        this.box = Matter.Bodies.rectangle(x, y, 30, 30, prop);
        this.image = loadImage("sprites/box.png");
        Matter.World.add(world, this.box);
        this.visibile = 255;
    }

    display() {
        if (this.box.speed < 5) {
            imageMode(CENTER)
            image(this.image, this.box.position.x, this.box.position.y, 30, 30);
        }
        else {
            Matter.World.remove(world, this.box);
            push();
            this.visibile = this.visibile - 5;
            tint(255, this.visibile);
            image(this.image, this.box.position.x, this.box.position.y, 30, 30);
            pop();
        }
    }
score(){
    if(this.visibile < 0   &&   this.visibile > - 10)
    score ++  ;
}


}