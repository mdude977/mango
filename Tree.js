class Tree{
    constructor (x,y,r){
        var options={
            isStatic : true,
            
         }
         this.x=x
         this.y=y
         this.r=r
         this.image = loadImage("Plucking mangoes/tree.png")
         this.body = Bodies.circle(x,y,r,options)
         World.add(world,this.body)
    }

    display(){
    var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      angleMode(RADIANS);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.r,this.r);
      pop();
    }
}