//Problem Statement:-Accept one number and check wheather it is divisible by 5 or not
var Demox = /** @class */ (function () {
    function Demox(A) {
        this.No = A;
    }
    Demox.prototype.ChkDivisibleByFive = function () {
        if (this.No % 5 == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return Demox;
}());
function main() {
    var Numb = 21;
    var dobj = new Demox(Numb);
    var Ret = false;
    Ret = dobj.ChkDivisibleByFive();
    if (Ret == true) {
        console.log("The Number " + Numb + " is Divisible by 5");
    }
    else {
        console.log("The Number " + Numb + " is Not Divisible by 5");
    }
}
main();
