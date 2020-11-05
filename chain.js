class Chain{
    constructor(bodyA,point){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.1,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
   fly(){
       this.chain.bodyA=null
   }
}