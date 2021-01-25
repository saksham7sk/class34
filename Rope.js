class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 450
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    

    display(){
        push()
        var pointA = this.rope.bodyA.position
        var pointB = this.pointB
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop()
    }
}