class chain{
constructor(bodyA, pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length: 10
    }
    this.chain = Constraint.create(options);
    World.add(world,this.chain);
    
}
attach(body){
    this.chain.bodyA = body;
}

fly(){
    this.chain.bodyA = null;
}

display(){
    push()
    if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        push();
        
        stroke("brown");
        
            strokeWeight(3);
            //line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
           
        }
       
        
        pop();
    }
}

