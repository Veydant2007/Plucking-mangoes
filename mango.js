class mango{
    constructer(x,y,height.width){
    mango = bodies.circle(x,y,radius,options)
    var options = {
        isStatic:true,
        restitution:0,
        friction:1,
     
    }
    mangoImage = loadImage(Plucking+mangoes/mango.png)
    }
    displaymango(){
    image(mangoImage,this.body.position.x,this.body.position.y)
    }
    }