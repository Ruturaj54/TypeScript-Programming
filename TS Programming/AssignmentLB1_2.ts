//Problem Statement:- Program to print 5 times “Marvellous” on screen.

function Display(Val : number,STR : string) : void
{
    console.log("----------------------------------------");
    for(var i = 1;i <= Val;i++)
    {
        console.log(STR);
    }
    console.log("----------------------------------------");
}

var No1 : number = 5;
var Str : string = "Marvellous";

Display(No1,Str);

