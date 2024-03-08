//***************Object oriented programming*******************
//Encaapsulation achieved
var Demox = /** @class */ (function () {
    //Constructor is method which gets Automatically when object for class is created
    function Demox() {
        console.log("Inside Default Constructor");
        this.No1 = 0;
        this.No2 = 0;
    }
    //Behaviour
    Demox.prototype.Display = function () {
        console.log("inside Display function of Demo Class");
    };
    return Demox;
}());
var obj = new Demox();
obj.Display();
console.log(obj.No1);
console.log(obj.No2);
