class paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density: 1.2
        }
        this.body= Bodies.circle(x,y,40,options);
        World.add(world, this.body);
    }
    display(){
        this.body.position.x = 200;
        this.body.position.y = 200;
        circle(this.x,this.y,40);
    }
}