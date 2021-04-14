class ROPE {
    constructor(a, b) {
        var prop = { bodyA: a, pointB: b, stiffness: 0.01, length: 1 }
        this.body_a = a;
        this.point_b = b;
        this.rope = Matter.Constraint.create(prop);
        Matter.World.add(world, this.rope);
    }

    display() {
        // push()
        if (this.rope.bodyA) {
            var A = this.body_a.position;
            var B = this.point_b;
            strokeWeight(2);
            stroke("white")
            line(A.x, A.y, B.x, B.y);
        }
        // pop() 
    }

    shoot() {
        this.rope.bodyA = null;
    }

    join(body) {
        this.rope.bodyA = body;
    }
}