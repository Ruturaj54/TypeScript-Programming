//Problem Statement:- Program to print 5 times “Marvellous” on screen.
function Display(Val, STR) {
    console.log("----------------------------------------");
    for (var i = 1; i <= Val; i++) {
        console.log(STR);
    }
    console.log("----------------------------------------");
}
var No1 = 5;
var Str = "Marvellous";
Display(No1, Str);
