class dust{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.w=width;
        this.h=height;
        World.add(world, this.body);
    }
    display(){
        rect(this.x, this.y, this.width, this.height);
    }
}