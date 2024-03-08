//1. Create one typescript application which contains one class named as Arithmetic. 
//Arithmetic class contains three characteristics (Class data members) as Number1, Number2. 
//Create one parametrised constructor which accept two values and assign it to Number1 and 
//Number2. 
//In Arithmetic class we have to write four methods (Behaviours) as Addition, Subtraction , 
//Multiplication and Division. 
//Addition method will add Number1 , Number2 & return result. 
//Subtraction method will subtract Number1 , Number2 & return result. 
//Multiplication method will multiply Number1 , Number2 & return result. 
//Division method will divide Number1 , Number2 & return result. 
//After designing the class create two objects of that class by providing some hardcoded value. 
//Call all the methods by using both the objects.
var Arithemetic = /** @class */ (function () {
    function Arithemetic(Value1, Value2) {
        this.Number1 = Value1;
        this.Number2 = Value2;
    }
    Arithemetic.prototype.Addition = function () {
        var Ans = 0;
        Ans = this.Number1 + this.Number2;
        return Ans;
    };
    Arithemetic.prototype.Substraction = function () {
        var Ans = 0;
        Ans = this.Number1 - this.Number2;
        return Ans;
    };
    Arithemetic.prototype.Division = function () {
        var Ans = 0;
        Ans = this.Number1 / this.Number2;
        return Ans;
    };
    Arithemetic.prototype.Multiplication = function () {
        var Ans = 0;
        Ans = this.Number1 * this.Number2;
        return Ans;
    };
    return Arithemetic;
}());
var Obj1 = new Arithemetic(10, 11);
var Obj2 = new Arithemetic(20, 31);
var iRet = 0;
iRet = Obj1.Addition();
console.log("Addition is : " + iRet);
iRet = Obj1.Substraction();
console.log("Substraction is : " + iRet);
iRet = Obj1.Division();
console.log("Divivsion is : " + iRet);
iRet = Obj1.Multiplication();
console.log("Multiplication is : " + iRet);
iRet = Obj2.Addition();
console.log("Addition is : " + iRet);
iRet = Obj2.Substraction();
console.log("Substraction is : " + iRet);
iRet = Obj2.Division();
console.log("Divivsion is : " + iRet);
iRet = Obj2.Multiplication();
console.log("Multiplication is : " + iRet);
