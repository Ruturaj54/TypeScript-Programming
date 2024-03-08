var Arithmetic1 = /** @class */ (function () {
    function Arithmetic1(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arithmetic1.prototype.Addition = function () {
        var Ans;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithmetic1.prototype.Substraction = function () {
        var Ans;
        Ans = this.No1 - this.No2;
        return Ans;
    };
    return Arithmetic1;
}());
var object1 = new Arithmetic1(11, 10);
var object2 = new Arithmetic1(25, 21);
console.log(object1.No1);
console.log(object1.No2);
var Result = 0;
Result = object1.Addition();
console.log("Addition of " + object1.No1 + " and " + object1.No2 + " is : " + Result);
Result = object2.Substraction();
console.log("Substraction of " + object1.No1 + " and " + object1.No2 + " is : " + Result);
