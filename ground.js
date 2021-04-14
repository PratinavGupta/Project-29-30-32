class GROUND {
    constructor(x, y, w, h) {
        var prop = { isStatic: "true" }
        this.ground = Matter.Bodies.rectangle(x, y, w, h, prop);
        this.w = w;
        this.h = h;
        Matter.World.add(world, this.ground);
    }
    display() {
        push();
        fill("orange");
        rect(this.ground.position.x, this.ground.position.y, this.w, this.h);
        pop();
    }
}