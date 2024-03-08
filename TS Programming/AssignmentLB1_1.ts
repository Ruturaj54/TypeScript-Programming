
//Problem Statement:-program to divide two numbers

function DivideNumb(Value1:number,Value2:number) : number
{
    var Ret : number = 0;
    Ret = Value1/Value2;
    return Ret;

}

var No1:number = 10;
var No2:number = 20;
var Ans:number = 0;

Ans = DivideNumb(No1,No2);

console.log("----------------------------------------");
console.log("Division of "+No1+" and "+No2+" is : "+Ans);
console.log("----------------------------------------");