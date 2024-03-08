
class Arithmetic1
{
    public No1 : number;
    public No2 : number;

    constructor(A : number,B : number)
    {
        this.No1 = A;
        this.No2 = B;
    }

    Addition() : number
    {
        var Ans : number;
        Ans = this.No1 + this.No2;
        return Ans;
    }

    Substraction() : number
    {
        var Ans : number;
        Ans = this.No1 - this.No2;
        return Ans;
    }

}

var object1 = new Arithmetic1(11,10);
var object2 = new Arithmetic1(25,21);

console.log(object1.No1);
console.log(object1.No2);

var Result : number = 0;

Result = object1.Addition();
console.log("Addition of "+object1.No1+" and "+object1.No2+" is : "+Result);

Result = object2.Substraction();
console.log("Substraction of "+object1.No1+" and "+object1.No2+" is : "+Result);
