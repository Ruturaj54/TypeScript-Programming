function Addition(No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
}
function Substraction(No1, No2) {
    var Ans = 0;
    Ans = No1 - No2;
    return Ans;
}
var Value1 = 11;
var Value2 = 10;
var Result = 0;
Result = Addition(Value1, Value2);
console.log("Additition of : " + Value1 + "and " + Value2 + " is = " + Result);
Result = Substraction(Value1, Value2);
console.log("Substraction of : " + Value1 + "and " + Value2 + " is = " + Result);
