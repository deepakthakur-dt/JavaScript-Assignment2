class Shape
{
    constructor(name,shape){
        this.name = name;
        this.shape = shape;
    }
    shapeInfo(){
        document.getElementById("input1").innerHTML = "Shape of Rectangle";
    }
}


class Rectangle extends Shape
{
    constructor(name,shape,length,width)
    {
        super(name,shape);
        this.length = length;
        this.width = width;
    }
    area()
    {
        return this.length*this.width;
    }
    shapeInfo()
    {
        super.shapeInfo();
        document.getElementById("input2").innerHTML = "Rectangle area is "+ this.area() +"<br> name of rectangle : "+this.name+ " <br> shape of the rectangle : "+this.shape 
    }
}

rec = new Rectangle("rectangle","rectangular shape",20,20);
rec.area();
rec.shapeInfo();