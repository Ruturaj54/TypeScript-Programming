var Arithmetic = /** @class */ (function () {
    function Arithmetic(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arithmetic.prototype.Addition = function () {
        var Ans;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithmetic.prototype.Substraction = function () {
        var Ans;
        Ans = this.No1 - this.No2;
        return Ans;
    };
    return Arithmetic;
}());
var object1 = new Arithmetic(11, 10);
var object2 = new Arithmetic(25, 21);
var Result = 0;
Result = object1.Addition();
console.log("Addition of " + object1.No1 + " and " + object1.No2 + " is : " + Result);
Result = object2.Substraction();
console.log("Substraction of " + object1.No1 + " and " + object1.No2 + " is : " + Result);
