class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
          }
        this.ground = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(myWorld,this.ground);
         }
    display(){
        var pos = this.ground.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x,pos.y,this.width,this.height);

    }
}