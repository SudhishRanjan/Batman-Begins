class umbralla{
    constructor(x,y){
        var options={isStatic:true}
        this.umbralla=Bodies.circle(x,y,50,options)
        World.add(world,this.umbralla)
        this.image=loadImage("walking_1.png")
    }
    display(){
        var pos=this.umbralla.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y+70,300,300)
        

    }
}