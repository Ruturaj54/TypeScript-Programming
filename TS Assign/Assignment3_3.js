//3. Create one typescript application which contains one class named as CircleX which sill 
//inherits above Circle class. 
//In CircleX class we have to write one method (Behaviours) as Circumference which will return 
//circumference of circle. 
//After designing the class create two objects of that class by providing some hardcoded value. 
//Call Circumference and Area methods by using both the objects.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Circlex = /** @class */ (function (_super) {
    __extends(Circlex, _super);
    function Circlex(Value1, Value2) {
        if (Value2 === void 0) { Value2 = 3.14; }
        var _this = _super.call(this, Value1, Value2) || this;
        _this.Radiusx = Value1;
        _this.PIx = Value2;
        return _this;
    }
    Circlex.prototype.Circumference = function () {
        var Res = 0;
        Res = 2 * this.PIx * this.Radiusx;
        return Res;
    };
    return Circlex;
}(Circle));
var Objx1 = new Circle(5, 3.14);
var Objx2 = new Circlex(10);
var iRet = 0;
iRet = Objx1.AreaOfCircle();
console.log("Area of circle is : " + iRet);
iRet = Objx2.AreaOfCircle();
console.log("Area of circle is : " + iRet);
iRet = Objx2.Circumference();
console.log("Circumference of circle is : " + iRet);
