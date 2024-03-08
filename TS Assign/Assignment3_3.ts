//3. Create one typescript application which contains one class named as CircleX which sill 
//inherits above Circle class. 
//In CircleX class we have to write one method (Behaviours) as Circumference which will return 
//circumference of circle. 
//After designing the class create two objects of that class by providing some hardcoded value. 
//Call Circumference and Area methods by using both the objects.


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
class Circlex extends Circle
{
   public Radiusx : number;
   public PIx : number;

   constructor(Value1 : number,Value2 : number = 3.14)
   {
      super(Value1,Value2);
      this.Radiusx = Value1;
      this.PIx = Value2;
   }

   Circumference():number
   {
      var Res : number = 0;
      Res = 2 * this.PIx * this.Radiusx;
      return Res;
   }


}

var Objx1 = new Circle(5,3.14);
var Objx2 = new Circlex(10);
var iRet : number = 0;

iRet = Objx1.AreaOfCircle();
console.log("Area of circle is : "+iRet);

iRet = Objx2.AreaOfCircle();
console.log("Area of circle is : "+iRet);

iRet = Objx2.Circumference();
console.log("Circumference of circle is : "+iRet);