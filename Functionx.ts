
function Multiplication(Value1 : number,Value2 : number) : number
{
    var Result : number = 0;
    Result = Value1 * Value2;
    return Result;
}

var iNo1 : number = 11;
var iNo2 : number = 10;
var Ans : number = 0;

Ans = Multiplication(iNo1,iNo2);
console.log("Multiplication is : "+Ans);