//Problem Statement:-program to divide two numbers
function DivideNumb(Value1, Value2) {
    var Ret = 0;
    Ret = Value1 / Value2;
    return Ret;
}
var No1 = 10;
var No2 = 20;
var Ans = 0;
Ans = DivideNumb(No1, No2);
console.log("----------------------------------------");
console.log("Division of " + No1 + " and " + No2 + " is : " + Ans);
console.log("----------------------------------------");
