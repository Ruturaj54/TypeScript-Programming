//2. Create one typescript application which contains one class named as Circle. 
//Circle class contains two characteristics (Class data members) as Radius, PI. 
//Create one parametrised constructor which accept one value and assign it to Radius. Value of 
//PI member is set to 3.14. 
//In Circle class we have to one method (Behaviours) as Area which will return area of Circle. 
//After designing the class create two objects of that class by providing some hardcoded value. 
//Call the method Area by using both the objects. 


class Circle
{
   public Radius : number;
   public PI : number;

   constructor(Value1 : number,Value2 : number = 3.14)
   {
      this.Radius = Value1;
      this.PI = Value2;
   }

   AreaOfCircle() : number
   {
      var Ans : number = 0;
      Ans = this.PI * this.Radius*this.Radius; 
      return Ans;
   }

   
}

var Objx1 = new Circle(5,3.14);
var Objx2 = new Circle(20);
var iRet : number = 0;

iRet = Objx1.AreaOfCircle();
console.log("Area of circle is : "+iRet);

iRet = Objx2.AreaOfCircle();
console.log("Area of circle is : "+iRet);