//2. Create one typescript application which contains one class named as Circle. 
//Circle class contains two characteristics (Class data members) as Radius, PI. 
//Create one parametrised constructor which accept one value and assign it to Radius. Value of 
//PI member is set to 3.14. 
//In Circle class we have to one method (Behaviours) as Area which will return area of Circle. 
//After designing the class create two objects of that class by providing some hardcoded value. 
//Call the method Area by using both the objects. 
var Circle = /** @class */ (function () {
    function Circle(Value1, Value2) {
        if (Value2 === void 0) { Value2 = 3.14; }
        this.Radius = Value1;
        this.PI = Value2;
    }
    Circle.prototype.AreaOfCircle = function () {
        var Ans = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    };
    return Circle;
}());
var Objx1 = new Circle(5, 3.14);
var Objx2 = new Circle(20);
var iRet = 0;
iRet = Objx1.AreaOfCircle();
console.log("Area of circle is : " + iRet);
iRet = Objx2.AreaOfCircle();
console.log("Area of circle is : " + iRet);
